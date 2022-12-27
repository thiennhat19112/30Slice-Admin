import api from '../../axios/api';
const date = new Date();

export const getTotalOrderByMonth = async () => {
  try {
    const response = await api.get('admin/statistic/getTotalOrderByMonth');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getTotalProduct = async () => {
  try {
    const response = await api.get('admin/statistic/getTotalProduct');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getTotalOrder = async () => {
  try {
    const response = await api.get('admin/statistic/getTotalOrder');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getTotalCustomer = async () => {
  try {
    const response = await api.get('admin/statistic/getTotalCustomer');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getTotalStylist = async () => {
  try {
    const response = await api.get('admin/statistic/getTotalStylist');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getTotalBooking = async () => {
  try {
    const response = await api.get('admin/statistic/getTotalBooking');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllOrders = async () => {
  try {
    const response = await api.get('admin/statistic/getAllOrders');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
