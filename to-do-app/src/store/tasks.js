import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";

let initialState = {
  tasks: [],
  loading: false,
  error: null,
};

// export const fetchTasks = createAsyncThunk(
//   "fetchTasks",
//   async (_a, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/tasks");
//       return { tasks: response.data };
//     } catch (err) {
//       return rejectWithValue({ error: err.message });
//     }
//   }
// );

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // action: function
    apiRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    apiRequestFailed: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    getTasks: (state, { payload }) => {
      state.tasks = payload;
      state.loading = false;
      state.error = null;
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    removeTask: (state, { payload }) => {
      const index = state.tasks.findIndex((todo) => todo.id === payload.id);
      state.tasks.splice(index, 1);
    },
    completeTask: (state, { payload }) => {
      const index = state.tasks.findIndex((todo) => todo.id === payload.id);
      state.tasks[index].completed = payload.completed;
    },
  },
  // extraReducers: {
  //   [fetchTasks.fulfilled]: (state, { payload }) => {
  //     state.tasks = payload.tasks;
  //     state.loading = false;
  //   },
  //   [fetchTasks.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [fetchTasks.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload.error;
  //   },
  // },
});
// console.log(taskSlice);

export const {
  apiRequested,
  apiRequestFailed,
  getTasks,
  addTask,
  removeTask,
  completeTask,
} = taskSlice.actions;
export default taskSlice.reducer;

export const loadTasks = () =>
  apiCallBegin({
    url: "/tasks",
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  });

export const addNewTask = (data) =>
  apiCallBegin({
    url: "/tasks",
    method: "POST",
    data,
    onStart: apiRequested.type,
    onSuccess: addTask.type,
    onError: apiRequestFailed.type,
  });

export const completeTaskRequest = (task) =>
  apiCallBegin({
    url: `/tasks/${task.id}`,
    method: "PATCH",
    data: task,
    onStart: apiRequested.type,
    onSuccess: completeTask.type,
    onError: apiRequestFailed.type,
  });

export const deleteTaskRequest = (id) =>
  apiCallBegin({
    url: `/tasks/${id}`,
    method: "DELETE",
    onStart: apiRequested.type,
    onSuccess: removeTask.type,
    onError: apiRequestFailed.type,
  });
