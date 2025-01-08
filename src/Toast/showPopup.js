export const Toast = (type, response) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Generate message based on the type
  const message = getToastMessage(type, response);
  toast.innerHTML = `${message} <i class="fa-regular fa-circle-xmark" id="closeToast"></i>`;

  // Append the toast to the document body
  document.body.append(toast);

  // Close the toast on click
  const closeButton = toast.querySelector("#closeToast");
  closeButton.addEventListener("click", () => {
    toast.remove();
  });

  // Auto-remove toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
};

// Helper function to get the toast message
const getToastMessage = (type, response) => {
  switch (type) {
    case "contact":
    case "login":
    case "signup":
      return response;
    case "addItems":
      return `Item added with ID ${response}`;
    case "deleteItems":
      return `Item deleted with ID ${response}`;
    case "logoutAlert":
      return `${response}! You're logged out`;
    default:
      return "Unknown action";
  }
};
