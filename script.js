const joinButton = document.getElementById('joinButton');
const tabButtons = document.querySelectorAll('.tabButton');
const tabContents = document.querySelectorAll('.tabContent');
const signupForm = document.getElementById('signupForm');
const formFeedback = document.getElementById('formFeedback');

// Button click event
joinButton.addEventListener('click', () => {
  joinButton.textContent = "Welcome to FitLife!";
  joinButton.style.backgroundColor = "#2196F3";
  joinButton.classList.add('bounce');
  setTimeout(() => {
    joinButton.classList.remove('bounce');
  }, 500);
});

// Hover handled by CSS

// Tabs
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
    document.getElementById(button.dataset.target).classList.remove('hidden');
  });
});

// Keypress detection
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 'g') {
    alert("Gains Mode Activated! 💪");
  }
});

// Double click secret
joinButton.addEventListener('dblclick', () => {
  alert("Secret Tip: Consistency is the key to success! 🔑");
});

// Form validation
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    formFeedback.textContent = "Please fill out all fields.";
    return;
  }

  if (!validateEmail(email)) {
    formFeedback.textContent = "Invalid email address.";
    return;
  }

  if (password.length < 8) {
    formFeedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  formFeedback.style.color = "green";
  formFeedback.textContent = "Signup Successful!";
});

// Real-time password feedback
document.getElementById('password').addEventListener('input', (e) => {
  if (e.target.value.length < 8) {
    formFeedback.style.color = "red";
    formFeedback.textContent = "Password too short!";
  } else {
    formFeedback.style.color = "green";
    formFeedback.textContent = "Password strength: Good!";
  }
});

// Helper email validation
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
