import axios from "axios";

export const getProductData = async () => {
  try {
    const server = import.meta.env.VITE_SERVER;
    const resp = await axios.get(`${server}/product`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (error) {
    return error.response;
  }
};
