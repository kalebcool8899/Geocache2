// login.js
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
  
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    // Show the “vulnerable” SQL for teaching
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log('Simulated vulnerable query:', fakeQuery);
  
    // Always treat the submission as a successful SQL‐injection
    console.log('Successful SQL injection login');
    window.location.href = 'success.html';
  });
  