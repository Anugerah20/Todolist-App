const initialState = {
  todos: [
    { id: 1, title: "Buy Burger", completed: false },
    { id: 2, title: "Learn Redux React", completed: false },
    { id: 3, title: "Go to Bandung", completed: true },
  ],
};

export const ADD_TODO_LIST = "ADD_TODO_LIST";

export function addTodoList(newTodoList) {
  return {
    type: ADD_TODO_LIST,
    payload: newTodoList,
  };
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoListReducer;
