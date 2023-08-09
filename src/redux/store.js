import { createStore } from "redux";
import todoListReducer from "./reducers/todoListReducer";

const storedList = JSON.parse(localStorage.getItem("list")) || [];

const store = createStore(todoListReducer, {
     todos: storedList,
     filter: "ALL",
});

export default store;
