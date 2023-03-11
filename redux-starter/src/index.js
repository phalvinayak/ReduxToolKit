import axios from "axios";
import {
  addNewTask,
  completeTaskRequest,
  deleteTaskRequest,
  fetchTasks,
  getTasks,
  loadTasks,
} from "./store/tasks";
import store from "./store/configureStore";
import { apiCallBegin } from "./store/api";

// const URL = "http://localhost:5000/api/tasks";
// const gettingTasks = async () => {
//   try {
//     const response = await axios.get(URL);
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (err) {
//     store.dispatch({ type: "SHOW_ERROR", payload: { error: err.message } });
//   }
// };

// gettingTasks();

// store.dispatch(fetchTasks());
store.dispatch(loadTasks());

// store.dispatch(
//   apiCallBegin({
//     url: "/tasks",
//     onStart: "tasks/apiRequested",
//     onSuccess: "tasks/getTasks",
//     onError: "tasks/apiRequestFailed",
//   })
// );

// store.dispatch({
//   type: "apiRequest",
//   payload: {
//     url: "/tasks",
//     onStart: "tasks/apiRequested",
//     onSuccess: "tasks/getTasks",
//     onError: "tasks/apiRequestFailed",
//   },
// });

// Adding new task
store.dispatch(addNewTask({ task: "This is a new Task" }));

// Mark task to complete
store.dispatch(completeTaskRequest({ id: 4, completed: true }));

store.dispatch(deleteTaskRequest(5));
