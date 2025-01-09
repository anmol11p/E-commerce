import axios from "axios";

export const sendContactData = async (data) => {
  try {
    const server = import.meta.env.VITE_SERVER;
    const response = await axios.post(`${server}/contact`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    if (error.status === 400) {
      return error.response.data.extraDetails;
    } else {
      console.log(error.message);
      return error.message.message;
    }
  }
};
