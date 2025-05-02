document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // EXTREMELY strict SQL injection detection
    const isInjection = /('.+('|\)|--|\/\*))|(OR|AND|UNION|SELECT|INSERT|UPDATE|DELETE|EXEC|ALTER|CREATE|DROP|SLEEP|BENCHMARK|WAITFOR|1=1|0=0)/i.test(user + pass);
    
    // Simulate vulnerable SQL query
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log("Vulnerable query:", fakeQuery);
    
    if (isInjection) {
        window.location.href = 'success.html';
    } else {
        // Clear form and show generic error
        document.getElementById('loginForm').reset();
        document.getElementById('message').textContent = "Invalid credentials";
        // Log failed attempts
        console.log(`Blocked login attempt: ${user} / ${pass}`);
    }
});