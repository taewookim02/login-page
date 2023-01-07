const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordError = document.querySelector(".password-error");
const form = document.querySelector("#my-form");

passwordConfirm.addEventListener("input", (e) => {
  if (password.value !== passwordConfirm.value) {
    passwordError.classList.remove("hidden");
    password.classList.add("red-border");
    passwordConfirm.classList.add("red-border");
  } else {
    passwordError.classList.add("hidden");
    password.classList.remove("red-border");
    passwordConfirm.classList.remove("red-border");
  }
});

form.addEventListener("submit", (e) => {
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    alert("Passwords do not match!");
  }
});
