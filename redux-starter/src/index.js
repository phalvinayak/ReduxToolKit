import { addTask, completeTask, fetchTodo, removeTask } from "./store/task";
import store from "./store/configureStore";

const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask({ task: "Task1" }));
store.dispatch(addTask({ task: "Task2" }));
console.log(store.getState());

// unsubscribe();
store.dispatch(completeTask({ id: 2 }));

store.dispatch(removeTask({ id: 1 }));

store.dispatch(fetchTodo());
console.log(store.getState());
