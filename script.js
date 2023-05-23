//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const rememberMeCheckbox = document.getElementById('checkbox');
      const submitButton = document.getElementById('submit');
      const existingUserButton = document.getElementById('existing');

      // Check if there are saved details in local storage
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        existingUserButton.style.display = 'inline-block';
      }

      submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        alert('Logged in as ' + username);
      });

      existingUserButton.addEventListener('click', function(event) {
        event.preventDefault();

        const savedUsername = localStorage.getItem('username');
        alert('Logged in as ' + savedUsername);
      });
    });