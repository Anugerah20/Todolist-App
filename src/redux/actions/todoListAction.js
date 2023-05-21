export const ADD_TODO_LIST = "ADD_TODO_LIST";

export const addTodoList = (payload) => {
  return {
    type: ADD_TODO_LIST,
    payload,
  };
};
