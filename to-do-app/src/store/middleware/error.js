const error = (store) => (next) => (action) => {
  if (action.type === "SHOW_ERROR") {
    console.warn(action.payload.error);
  }
  next(action);
};

export default error;
