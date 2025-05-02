// login.js
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
  
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    // Show the “vulnerable” query for teaching
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log('Vulnerable query:', fakeQuery);
  
    // Strict injection‐only check:
    //  • quotes or comment tokens
    //  • semicolon
    //  • or these keywords as WHOLE words
    const injRegex = /('|--|\/\*|;|\bOR\b|\bAND\b|\bUNION\b|\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b)/i;
  
    if (injRegex.test(user) || injRegex.test(pass)) {
      console.log('Injection detected—granting access');
      return window.location.href = 'success.html';
    }
  
    // Anything else — including "user"/"password" or "admin"/"secret123" — is blocked
    document.getElementById('loginForm').reset();
    document.getElementById('message').textContent = 'Invalid credentials';
    console.log(`Blocked normal login attempt: ${user} / ${pass}`);
  });
  