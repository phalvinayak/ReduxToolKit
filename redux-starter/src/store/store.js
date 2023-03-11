import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./task";

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true }))
);

export default store;
