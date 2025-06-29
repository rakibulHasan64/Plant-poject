import axios from "axios";

export const fetchCartItems = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart?email=${email}`);
  return res.data;
};
