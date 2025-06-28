const form = document.getElementById("login-form");

const validEmail = "user@example.com";
const validPassword = "qwerty123";

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === validEmail && password === validPassword) {
    alert("Успешный вход!");
    window.location.href = "main.html"; // Заменить на нужную страницу
  } else {
    alert("Неверная почта или пароль.");
  }
});