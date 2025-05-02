document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // Simulate vulnerable SQL query (for educational purposes only)
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log("Simulated vulnerable query:", fakeQuery);
    
    // Classic SQL injection patterns that will grant access
    const injectionPatterns = [
        /'.*--/,       // Comment bypass
        /'.*OR.*1=1/,  // Always true condition
        /'.*;.*/,      // Query stacking
        /'.*=\s*'/,    // Empty comparison
        /'.*UNION.*/   // UNION-based injection
    ];
    
    // Check for injection patterns or correct credentials
    const isInjected = injectionPatterns.some(pattern => 
        pattern.test(user) || pattern.test(pass)
    );
    
    if (isInjected || (user === 'admin' && pass === 'secret123')) {
        // Log the "attack" for educational purposes
        console.log(`Successful ${isInjected ? "SQL injection" : "legitimate"} login`);
        return window.location.href = 'success.html';
    }
    
    document.getElementById('message').textContent = 'Access denied. Try a SQL injection!';
});