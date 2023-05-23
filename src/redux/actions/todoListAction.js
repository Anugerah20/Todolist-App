export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const EDIT_TODO_LIST = "EDIT_TODO_LIST";
export const TOGGLE_TODO_LIST = "TOGGLE_TODO_LIST";

export const addTodoList = (newTodoList) => {
  return {
    type: ADD_TODO_LIST,
    payload: newTodoList,
  };
};

export const removeTodoList = (id) => {
  return {
    type: REMOVE_TODO_LIST,
    payload: {
      id,
    },
  };
};

// export const updateTodoList = (payload) => {
//   return {
//     type: EDIT_TODO_LIST,
//     payload,
//   };
// };

export const editTodoList = (todo) => {
  return {
    type: EDIT_TODO_LIST,
    payload: todo,
  };
};

export const toggleTodoList = (todo) => {
  return {
    type: "TOGGLE_TODO_LIST",
    payload: todo,
  };
};
