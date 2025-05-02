document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // Hardcoded valid credentials (insecure implementation)
    const validUsers = {
        "admin": "password123",
        "user1": "geocache1",
        "geocacher": "treasure42"
    };
    
    // Simulate vulnerable SQL query
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log("Vulnerable query:", fakeQuery);
    
    // Check for either:
    // 1. Valid credentials OR
    // 2. SQL injection pattern
    if (validUsers[user] === pass || /['"=;]|--|\/\*|OR|AND|1=1/i.test(user + pass)) {
        window.location.href = 'success.html';
    } else {
        document.getElementById('message').textContent = "Access denied";
    }
});