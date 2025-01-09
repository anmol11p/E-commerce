import { sendSignUpData } from "./sendSignUpData";
import { Toast } from "./../Toast/showPopup";

export const submitSignUp = async (event) => {
  const formdata = new FormData(event.target);
  const username = formdata.get("username");
  const email = formdata.get("email");
  const password = formdata.get("password");
  const confirmPassword = formdata.get("confirmPassword");

  //!   send data to backend
  let response = await sendSignUpData({
    username,
    email,
    password,
    confirmPassword,
  });
  //! send toast
  Toast("signup", response);
  let token = localStorage.getItem("token");
  if (token) {
    Toast("signup", response);
    setTimeout(() => {
      window.location.href = "/Ecommerce/";
    }, 1500);

    // show logOut button
    const button = document.querySelector(".links-header");
    button.innerHTML = `
    <div className="links-header flex"> <a href="/Ecommerce/" class='logoutBtn'>logout</a>
     </div>`;
  }
};
