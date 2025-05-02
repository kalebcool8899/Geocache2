// login.js
const fakeDB = [
    { username: 'admin', password: 'secret123' }
  ];
  
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    // Simulate a vulnerable SQL query being built client-side
    const query = `SELECT * FROM users WHERE username = '${user}' AND password = '${pass}';`;
    console.log('Generated SQL:', query);
  
    // Naïve “auth”: just check that both real credentials appear somewhere in the string
    let authenticated = false;
    for (const row of fakeDB) {
      if (
        query.includes(`username = '${row.username}'`) &&
        query.includes(`password = '${row.password}'`)
      ) {
        authenticated = true;
        break;
      }
    }
  
    if (authenticated) {
      window.location.href = 'success.html';
    } else {
      document.getElementById('message').textContent = 'Invalid credentials.';
    }
  });
  