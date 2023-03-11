import React from "react";
import store from "./store/configureStore";
import Tasks from "./components/Tasks";
import StoreContext from "./contexts/StoreContext";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
