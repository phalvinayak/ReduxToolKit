import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions for TASK
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLTETE_TASK");

// // Actions for TASK
// export const addTask = (task) => {
//   return {
//     type: ADD_TASK,
//     payload: {
//       task,
//     },
//   };
// };

// export const removeTask = (id) => {
//   return {
//     type: REMOVE_TASK,
//     payload: {
//       id,
//     },
//   };
// };

// export const completeTask = (id) => {
//   return {
//     type: COMPLETE_TASK,
//     payload: { id },
//   };
// };

export const fetchTodo = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
  dispatch(addTask({ task: data.title }));
};

// Reducer for TASK
let id = 0;
let initialState = [];

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, { payload }) => {
      state.push({
        id: ++id,
        task: payload.task,
        completed: false,
      });
    })
    .addCase(removeTask, (state, { payload }) => {
      const index = state.findIndex((task) => task.id === payload.id);
      state.splice(index, 1);
    })
    .addCase(completeTask, (state, { payload }) => {
      const index = state.findIndex((task) => task.id === payload.id);
      state[index].completed = true;
    });
});

// export default function reducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: payload.task,
//           completed: false,
//         },
//       ];
//     case removeTask.type:
//       return state.filter((task) => task.id !== payload.id);
//     case completeTask.type:
//       return state.map((task) => {
//         if (task.id === payload.id) {
//           return { ...task, completed: true };
//         }
//         return task;
//       });
//     default:
//       return state;
//   }
// }
