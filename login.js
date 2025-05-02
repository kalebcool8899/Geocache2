// login.js (updated)
const fakeDB = [
    { username: 'admin', password: 'secret123' }
  ];
  
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
  
    // Simulate building a vulnerable SQL query
    const query = `SELECT * FROM users WHERE username = '${user}' AND password = '${pass}';`;
    console.log('Generated SQL:', query);
  
    let authenticated = false;
  
    // 1) Legit check
    for (const row of fakeDB) {
      if (user === row.username && pass === row.password) {
        authenticated = true;
        break;
      }
    }
  
    // 2) Injection bypass: if input contains any SQL meta-chars or boolean keywords
    const injPattern = /['";=]|--|\bOR\b|\bAND\b/i;
    if (injPattern.test(user) || injPattern.test(pass)) {
      authenticated = true;
    }
  
    if (authenticated) {
      window.location.href = 'success.html';
    } else {
      document.getElementById('message').textContent = 'Invalid credentials.';
    }
  });
  