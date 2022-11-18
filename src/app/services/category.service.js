import axios from "axios";
import authHeader from "./auth-header";

const API_URL = import.meta.env.REACT_APP_API_ENDPOINT;

export const getCategory = async () => {
  try {
    
    const response = await axios.get(API_URL + "category/getAllCategories");
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getOneCategory = async (id) => {
  try {
    const response = await axios.get(API_URL + "category/getOneCategory/" + id);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const getParentCategory = async () => {
  try {
    const response = await axios.get(API_URL + "category/getCategoriesParent");
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
