document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = form.email.value;
      const password = form.password.value;
  
      // Simple email validation
      if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
      }
  
      // Password length validation
      if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
      }
  
      // Clear any previous error messages
      errorMessage.textContent = '';
  
      // Perform login or further processing here
      alert('Login successful!');
    });
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  