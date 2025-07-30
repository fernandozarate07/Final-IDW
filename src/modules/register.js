// validación del registro
const registerForm = document.querySelector(".register__form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const repeat = document.getElementById("repeat-password");
    const errorMessage = document.querySelector(".register__errorSearch");

    if (
      email.value.trim() === "" ||
      password.value.trim().length < 6 ||
      password.value.trim().length > 20 ||
      password.value !== repeat.value
    ) {
      errorMessage.textContent = "Por favor completá bien los campos";
      errorMessage.classList.add("visible");
    } else {
      errorMessage.textContent = "";
      errorMessage.classList.remove("visible");
      alert("Registro validado, sin enviar datos");
    }
  });
}
