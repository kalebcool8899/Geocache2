// login.js
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
  
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    // 1) Build & log the “vulnerable” query for teaching
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log('Vulnerable query:', fakeQuery);
  
    // 2) Strict injection‐only check: must contain at least one SQL meta‑pattern
    const injRegex = /('|--|\/\*|\bOR\b|\bAND\b|\bUNION\b|\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b|=|;)/i;
    if (injRegex.test(user) || injRegex.test(pass)) {
      console.log('Injection detected—granting access');
      return window.location.href = 'success.html';
    }
  
    // 3) Everything else fails
    document.getElementById('loginForm').reset();
    document.getElementById('message').textContent = 'Invalid credentials';
    console.log(`Blocked normal login attempt: ${user} / ${pass}`);
  });
  