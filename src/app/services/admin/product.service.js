import api from '../../axios/api';

export const getProducts = async (pageNumber = 1,search = "",limit = 7) => {
    try{
        const response = await api.get(`product/getProducts?page=${pageNumber}&limit=${limit}&search=${search}`);
        if(response.status === 200){
            return response.data;
        }
        
    }catch(err){
        throw new Error(err)
    }
    
};

export const getOneProduct = async (id) => {
    try {
      const response = await api.get("product/getOneProduct/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  
  export const addProduct = async (data) => {
    try {
      const res = await api.post("product/", data);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  };
  
  export const updateProduct = async (data) => {
    try {
      const res = await api.put("product/", data);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  };
  
  export const deleteProduct = async (data) => {
    try {
      const res = await api.delete("product/", { data });
      return res;
    } catch (err) {
      throw new Error(err);
    }
  };

