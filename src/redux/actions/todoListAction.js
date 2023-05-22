export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const UPDATE_TODO_LIST = "UPDATE_TODO_LIST";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const UPDATE_CHECKBOX = "UPDATE_CHECKBOX";

export const addTodoList = (payload) => {
  return {
    type: ADD_TODO_LIST,
    payload,
  };
};

export const handleCheckbox = (payload) => {
  return {
    type: UPDATE_CHECKBOX,
    payload,
  };
};
