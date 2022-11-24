import api from '../../axios/api';

export const getProducts = async () => {
    try{
        const response = await api.get('product/getAllProducts');
        if(response.status === 200){
            return response.data;
        }
        
    }catch(err){
        throw new Error(err)
    }
    
};