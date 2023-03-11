import axios from "axios";
import { getTasks } from "./store/tasks";
import store from "./store/configureStore";

const URL = "http://localhost:5000/api/tasks";
const gettingTasks = async () => {
  try {
    const response = await axios.get(URL);
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (err) {
    store.dispatch({ type: "SHOW_ERROR", payload: { error: err.message } });
  }
};

gettingTasks();
