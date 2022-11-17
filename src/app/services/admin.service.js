import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.REACT_APP_API_ENDPOINT;

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin/info', { headers: authHeader() });
};

const ChangePassword = async (old_password, new_password) => {
  const response = await axios.post(API_URL + 'admin/change-password', {
    old_password,
    new_password,
  },{
    headers: authHeader()
  });

  if (response.data) {
    console.log(response.data);

  }
  return response.data;
};
const EditCategory = async (old_category, new_category) => {
  const response = await axios.post(API_URL + 'admin/edit-category', {
    old_category,
    new_category,
  },{
    headers: authHeader()
  });

  if (response.data) {
    console.log(response.data);
  }
  return response.data;
};


const adminService = {
  getAdminBoard,
  ChangePassword
};

export default adminService;
