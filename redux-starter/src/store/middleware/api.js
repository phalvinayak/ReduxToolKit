import axios from "axios";
import { BASE_URL } from "../../utils/http";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiRequest") {
      return next(action);
    }
    console.log("API Request middle ware in action");
    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: BASE_URL,
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
