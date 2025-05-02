document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // Show the "vulnerable" SQL for teaching
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log('Simulated vulnerable query:', fakeQuery);
    
    // Check for SQL injection patterns
    if (user.includes("' OR") || user.includes("'--") || 
        pass.includes("' OR") || pass.includes("'--")) {
      console.log('Successful SQL injection detected');
      window.location.href = 'success.html';
    } else {
      document.getElementById('message').textContent = 'Invalid credentials';
    }
  });