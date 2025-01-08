import { sendContactData } from "./sendContactData";
import { Toast } from "../Toast/showPopup";

export const SubmitForm = async (event) => {
  event.preventDefault();
  let form=event.target;
  const formData = new FormData(form);
  const full_Name = formData.get("full_Name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const Data = { full_Name, email, subject, message };
  //! send Data to Backend
  let response = await sendContactData(Data);

  //! alert in frontEnd
  if (response) {
    Toast("contact", response[0] || response.message);
    form.reset()
  }
};
