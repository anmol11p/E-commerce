import axios from "axios";
export const sendLoginData = async (data) => {
  try {
    const server = import.meta.env.VITE_SERVER;

    const response = await axios.post(`${server}/auth/Login`, data);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      console.log(response.data.message);
      return response.data.message;
    }
  } catch (error) {
    switch (error.status) {
      case 404:
        return error.response.data.message;
      case 401:
        return error.response.data.message;
      case 400:
        return error.response.data.extraDetails[0];
      default:
        return error;
    }
  }
};
