import { SubmitForm } from "./SubmitForm";

const form = document.querySelector(".ContactForm");

form.addEventListener("submit", (event) => {
  SubmitForm(event);
});
