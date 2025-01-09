import { submitSignUp } from "./submitSignUp";

const form = document.querySelector("#signupForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSignUp(event);
});
let token = localStorage.getItem("token");
if (token) {
  window.location.href = "/";
}