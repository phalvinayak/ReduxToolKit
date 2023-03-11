import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/http";

let id = 0;
let initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (_a, { rejectWithValue }) => {
    try {
      const response = await axios.get("/tasks");
      return { tasks: response.data };
    } catch (err) {
      return rejectWithValue({ error: err.message });
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // action: function
    getTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.push({
        id: ++id,
        task: payload.task,
        completed: false,
      });
    },
    removeTask: (state, { payload }) => {
      const index = state.tasks.findIndex((todo) => todo.id === payload.id);
      state.tasks.splice(index, 1);
    },
    completeTask: (state, { payload }) => {
      const index = state.tasks.findIndex((todo) => todo.id === payload.id);
      state.tasks[index].completed = true;
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, { payload }) => {
      state.tasks = payload.tasks;
      state.loading = false;
    },
    [fetchTasks.pending]: (state) => {
      state.loading = true;
    },
    [fetchTasks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
  },
});
// console.log(taskSlice);

export const { getTasks, addTask, removeTask, completeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
