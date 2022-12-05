import api from '../../axios/api';

export const getTask = async (date) => {
    try {
      const response = await api.get("booking/getBookingByStyleList/"+date);
      if (response.status === 200) {
        return response;
      }
    } catch (err) {
      throw new Error(err);
    }
  };