import axios from "axios";
import { BASE_URL } from "../utils/http";
import { apiCallBegin } from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegin.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    try {
      const response = await axios.request({
        baseURL: BASE_URL,
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
      dispatch({ type: "SHOW_ERROR", payload: error.message });
    }
  };

export default api;
