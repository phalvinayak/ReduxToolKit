import { addTask, completeTask, fetchTodo, removeTask } from "./store/task";
import store from "./store/store";

const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask("Task1"));
store.dispatch(addTask("Task2"));
console.log(store.getState());

// unsubscribe();
store.dispatch(completeTask(2));

store.dispatch(removeTask(1));

store.dispatch(fetchTodo());
console.log(store.getState());
