document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Show the simulated vulnerable query
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log('Simulated vulnerable query:', fakeQuery);
    
    // Check for specific SQL injection patterns
    const injectionPatterns = [
        /' OR '1'='1/, 
        /' OR 1=1--/, 
        /' OR ''='/, 
        /' OR 'a'='a/,
        /'--/,
        /' OR '1'='1'--/,
        /admin'--/
    ];
    
    const isInjection = injectionPatterns.some(pattern => 
        pattern.test(user) || pattern.test(pass)
    );
    
    if (isInjection) {
        console.log('Successful SQL injection detected!');
        window.location.href = 'success.html';
    } else {
        message.textContent = 'Invalid credentials - try SQL injection!';
        console.log('Regular login attempt failed');
    }
});