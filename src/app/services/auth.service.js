import axios from 'axios';

const API_URL = import.meta.env.REACT_APP_API_ENDPOINT;

// const login = (username, password) => {
//   return axios
//     .post(API_URL + 'user/login', {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// };

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'admin/login', {
    username,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
};

export default authService;
