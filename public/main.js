document.addEventListener('DOMContentLoaded', () => {
    // Code inside this block runs when the DOM is fully loaded and ready
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });

                const result = await response.json();
                document.getElementById('registerResult').textContent = result.msg || 'Registration successful!';
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('registerResult').textContent = 'Failed to register user.';
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();
                document.getElementById('loginResult').textContent = result.msg || 'Login successful!';
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('loginResult').textContent = 'Failed to login.';
            }
        });
    }
});
