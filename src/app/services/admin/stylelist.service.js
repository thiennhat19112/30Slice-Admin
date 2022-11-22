import api from "../../axios/api";

export const getStyleList = async () => {
  try {
    const response = await api.get("stylelist/gettAllStyleList");
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
