import { createSlice } from "@reduxjs/toolkit";

let id = 0;
let initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // action: function
    addTask: (state, { payload }) => {
      state.push({
        id: ++id,
        task: payload.task,
        completed: false,
      });
    },
    removeTask: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state.splice(index, 1);
    },
    completeTask: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].completed = true;
    },
  },
});
console.log(taskSlice);

export const { addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
