import { createStore } from "redux";
import todoListReducer from "./reducers/todoListReducer";

const store = createStore(todoListReducer);

export default store;
