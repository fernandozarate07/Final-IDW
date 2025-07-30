// Validación de login
const loginForm = document.querySelector(".login__form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorMessage = document.querySelector(".login__errorSearch");

    if (email.value.trim() === "" || password.value.trim().length < 6 || password.value.trim().length > 20) {
      errorMessage.textContent = "Por favor completá bien los campos";
      errorMessage.classList.add("visible");
    } else {
      errorMessage.textContent = "";
      errorMessage.classList.remove("visible");
      alert("Login validado, sin enviar datos");
    }
  });
}
