import api from "../../axios/api";

export const getCus = async () => {
    try {
        const response = await api.get("user/getAllCustomer");
        if (response.status === 200) {
            return response.data;
        }
    } catch (err) {
        throw new Error(err);
    }
};