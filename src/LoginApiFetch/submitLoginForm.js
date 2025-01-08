import { Toast } from "../Toast/showPopup";
import { sendLoginData } from "./sendLoginData";

export const submitLoginForm = async (event) => {
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  //   send data to backend
  let response = await sendLoginData({ email, password });
  // toast the notification
  Toast("login", response);
  let token = localStorage.getItem("token");
  if (token) {
    Toast("login", response);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  }
  // show logOut button
  const button = document.querySelector(".links-header");
  button.innerHTML = `
  <div className="links-header flex"> <a href="/" class='logoutBtn'>logout</a>
   </div>`;
};
