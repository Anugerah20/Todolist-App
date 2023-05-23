import {
  ADD_TODO_LIST,
  REMOVE_TODO_LIST,
  EDIT_TODO_LIST,
} from "../actions/todoListAction";

const initialState = {
  todos: [],
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO_LIST:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case EDIT_TODO_LIST:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todoListReducer;
