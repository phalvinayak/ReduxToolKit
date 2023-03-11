import { createSlice } from "@reduxjs/toolkit";

let id = 0;
let initialState = [];

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, { payload }) => {
      state.push({
        id: ++id,
        name: payload.name,
      });
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
