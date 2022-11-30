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
export const updateStyleList = async (data) => {
  try {
    const response = await api.put("stylelist/", data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
}
