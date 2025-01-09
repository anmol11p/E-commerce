import axios from "axios";

export const sendSignUpData = async (data) => {
  try {
    const server = import.meta.env.VITE_SERVER;

    const response = await axios.post(`${server}/auth/Registration`, data);
    if (response.status === 201) {
      localStorage.setItem("token", response.data.token);
      return "login successfully";
    }
  } catch (error) {
    switch (error.status) {
      case 400:
        if (error.response && error.response.data) {
          return error.response.data.extraDetails &&
            error.response.data.extraDetails[0]
            ? error.response.data.extraDetails[0]
            : error.response.data.message;
        }
      case 409:
        return error.response.data.message;
      default:
        return error.response.data.message;
    }
  }
};
