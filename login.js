document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login check (replace this with actual authentication logic)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: If username is 'user' and password is 'pass', redirect to profile page
    if (username === 'user' && password === 'pass') {
        window.location.href = 'perfil.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
