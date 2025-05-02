document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // Check for any SQL injection indicators
    const isInjection = /['"=;]|--|\/\*|OR|AND|UNION|SELECT|SLEEP|BENCHMARK|1=1/i.test(user + pass);
    
    if (isInjection) {
        // Successful injection - redirect silently
        window.location.href = 'success.html';
    } else {
        // Failed attempt - just reset the form with no feedback
        document.getElementById('loginForm').reset();
    }
});