document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    const loginIcon = document.querySelector('.login-icon');

    if (isLoggedIn === 'true') {
        loginIcon.innerHTML = `Logged in as: ${username || 'Guest'} <a href="#" onclick="logout()">Logout</a>`;
    } else {
        loginIcon.innerHTML = `<a href="login.html"><i class="bi bi-person"></i> Login</a>`;
    }
});


function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
}
