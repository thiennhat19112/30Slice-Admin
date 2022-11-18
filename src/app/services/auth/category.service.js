import api from "./api";
export const getCategory = async () => {
    try {
      const response = await api.get("category/getAllCategories");
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  
  export const getOneCategory = async (id) => {
    try {
      const response = await api.get("category/getOneCategory/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  export const getParentCategory = async () => {
    try {
      const response = await api.get("category/getCategoriesParent");
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      throw new Error(err);
    }
  };