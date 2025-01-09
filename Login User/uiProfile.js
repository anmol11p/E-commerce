import { Toast } from "../Toast/showPopup";

export const uiProfile = (data) => {
  const { email, username } = data;

  // Show logout button
  addLogoutButton();

  // Add user profile icon
  addUserProfileIcon();

  // Add event listener for logout
  setupLogout(username);

  // Add event listener for showing profile modal
  setupProfileModal(email, username);
};

// Function to add logout button
const addLogoutButton = () => {
  const button = document.querySelector(".links-header");
  if (!button.querySelector(".logoutBtn")) {
    button.innerHTML = `
      <div class="links-header flex">
        <a  class="logoutBtn">Logout</a>
      </div>`;
  }
};

const removeProfileIcon = () => {
  const upperMenus = document.querySelector(".menus-link");
  console.log(upperMenus);
  if (upperMenus.querySelector(".userProfile")) {
    upperMenus.removeChild(upperMenus.querySelector(".userProfile"));
  }
};
// Function to add user profile icon to menu
const addUserProfileIcon = () => {
  const upperMenus = document.querySelector(".menus-link");
  if (!upperMenus.querySelector(".userProfile")) {
    const li = document.createElement("li");
    li.className = "userProfile";
    li.innerHTML = `<i class="fa-solid fa-user"></i>`;
    upperMenus.appendChild(li);
  }
};

// Function to handle logout
const setupLogout = (username) => {
  const logOut = document.querySelector(".logoutBtn");
  if (logOut) {
    logOut.addEventListener("click", () => {
      localStorage.removeItem("token");
      const button = document.querySelector(".links-header");
      if (button.querySelector(".logoutBtn")) {
        button.innerHTML = `
      <div class="links-header flex">
        <a href="/login">sign in</a>
        <a href="/signup">sign up</a>
      </div>`;
      }
      Toast("logoutAlert", username);
      removeProfileIcon();
    });
  }
};

// Function to handle profile modal
const setupProfileModal = (email, username) => {
  const profile = document.querySelector(".userProfile");
  profile.addEventListener("click", () => {
    createOverlayWithModal(email, username);
  });
};

// Function to create and show profile modal with overlay
const createOverlayWithModal = (email, username) => {
  // Remove existing modal and overlay if they exist
  let existingModal = document.querySelector(".profileInfo");
  let existingOverlay = document.querySelector(".overlay");

  if (existingModal) existingModal.remove();
  if (existingOverlay) existingOverlay.remove();

  // Create overlay
  let overlay = document.querySelector(".overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
  }

  // Create profile modal
  const div = document.createElement("div");
  div.className = "profileInfo";
  div.innerHTML = `
    <div class="profileContent flex">
      <div class="upperContentProfile flex">
        <h1>Your Profile</h1>
        <i class="fa-solid fa-circle-xmark removeModalbtn"></i>
      </div>
      <div class="common-icon-info-handle">
        <i class="fa-regular fa-envelope"></i>
        <span>${email}</span>
      </div>
      <div class="common-icon-info-handle">
        <i class="fa-solid fa-user"></i>
        <span>${username}</span>
      </div>
    </div>`;


  document.body.appendChild(div);

  // Add close functionality
  const closeModal = () => {
    div.remove();
    overlay.remove();
  };
  overlay.addEventListener("click", closeModal);
  div.querySelector(".removeModalbtn").addEventListener("click", closeModal);
};
