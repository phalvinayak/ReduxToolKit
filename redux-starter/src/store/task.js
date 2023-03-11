// Action types for TASK
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

// Actions for TASK
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      task,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id,
    },
  };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: { id },
  };
};

export const fetchTodo = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
  dispatch(addTask(data.title));
};

// Reducer for TASK
let id = 0;
let initialState = [];
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: payload.task,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== payload.id);
    case COMPLETE_TASK:
      return state.map((task) => {
        if (task.id === payload.id) {
          return { ...task, completed: true };
        }
        return task;
      });
    default:
      return state;
  }
}
