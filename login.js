// login.js (updated)
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    // If either input contains ANY non-alphanumeric char (', =, space, --, etc.), allow it
    const injTest = /[^a-zA-Z0-9]/;
    if (injTest.test(user) || injTest.test(pass)) {
      return window.location.href = 'success.html';
    }
  
    // Otherwise, require the real creds
    if (user === 'admin' && pass === 'secret123') {
      return window.location.href = 'success.html';
    }
  
    // Fallback: reject everything else
    document.getElementById('message').textContent = 'Invalid credentials.';
  });
  