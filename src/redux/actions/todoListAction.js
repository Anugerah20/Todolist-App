export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const UPDATE_TODO_LIST = "UPDATE_TODO_LIST";
export const UPDATE_CHECKBOX = "UPDATE_CHECKBOX";

export const addTodoList = (newTodoList) => {
  return {
    type: ADD_TODO_LIST,
    payload: newTodoList,
  };
};

export const removeTodoList = (todo) => {
  return {
    type: REMOVE_TODO_LIST,
    payload: todo,
  };
};

export const updateTodoList = (payload) => {
  return {
    type: UPDATE_TODO_LIST,
    payload,
  };
};
