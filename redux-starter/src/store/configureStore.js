import { configureStore } from "@reduxjs/toolkit";
import reducer from "./task";

const store = configureStore({
  reducer,
});

export default store;
