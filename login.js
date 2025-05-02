document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Show the simulated vulnerable query
    const fakeQuery = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
    console.log('Simulated vulnerable query:', fakeQuery);
    
    // Check for SQL injection patterns
    const isInjection = 
        // Common SQL injection patterns
        user.includes("'") || pass.includes("'") ||  // Any quote
        user.includes("--") || pass.includes("--") || // SQL comments
        user.includes("/*") || pass.includes("/*") || // Block comments
        user.includes("OR") || pass.includes("OR") || // OR clauses
        user.includes("AND") || pass.includes("AND") || // AND clauses
        user.includes("=") || pass.includes("=") ||   // Equality
        user.includes(";") || pass.includes(";") ||   // Query termination
        user.includes("1=1") || pass.includes("1=1") || // Always true
        // More advanced patterns
        user.includes("UNION") || pass.includes("UNION") || // UNION attacks
        user.includes("SELECT") || pass.includes("SELECT") || // Sub-queries
        user.includes("SLEEP") || pass.includes("SLEEP") || // Time-based
        user.includes("BENCHMARK") || pass.includes("BENCHMARK"); // Time-based
    
    if (isInjection) {
        console.log('Successful SQL injection detected!');
        window.location.href = 'success.html';
    } else {
        
        console.log('Regular login attempt failed');
    }
});