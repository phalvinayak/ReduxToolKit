import { addTask, completeTask, removeTask } from "./store/tasks";
import store from "./store/configureStore";
import { addEmployee } from "./store/employees";

// const unsubscribe = store.subscribe(() => {
//   console.log("Updated", store.getState());
// });

store.dispatch({
  type: "SHOW_ERROR",
  payload: { error: "Something to catch in middleware" },
});

store.dispatch(addTask({ task: "Task1" }));
store.dispatch(addTask({ task: "Task2" }));
console.log(store.getState());

// unsubscribe();
store.dispatch(completeTask({ id: 2 }));
store.dispatch(removeTask({ id: 1 }));

// store.dispatch(fetchTodo());
store.dispatch(addEmployee({ name: "Vinayak" }));

console.log(store.getState());
