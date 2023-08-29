const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function(event) {
  let hasErrors = false;

  // Reset error messages
  usernameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  // Validate username
  if (usernameInput.value.length < 4) {
    usernameError.textContent = 'Username must be at least 4 characters long';
    hasErrors = true;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email address';
    hasErrors = true;
  }

  // Validate password
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    hasErrors = true;
  }

  if (hasErrors) {
    event.preventDefault();
  }
});
