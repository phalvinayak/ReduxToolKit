import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import taskReducer from "./tasks";
import employeeReducer from "./employees";
import log from "../middleware/log";
import error from "../middleware/error";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    log,
    logger,
    error,
  ],
});

export default store;
