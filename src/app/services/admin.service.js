import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.REACT_APP_API_ENDPOINT;

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

const adminService = {
  getAdminBoard,
};

export default adminService;
