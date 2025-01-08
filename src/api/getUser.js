import axios from "axios";

export const getUser = async (token) => {
  try {
    const server = import.meta.env.VITE_SERVER;
    let response = await axios.get(`${server}/api/userInfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
