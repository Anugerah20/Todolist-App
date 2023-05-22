import { ADD_TODO_LIST, UPDATE_CHECKBOX } from "../actions/todoListAction";

const initialState = {
  todos: [
    { id: 1, title: "Buy Burger", completed: false },
    { id: 2, title: "Learn Redux React", completed: false },
    { id: 3, title: "Go to Bandung", completed: true },
  ],
};

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

    case UPDATE_CHECKBOX:
      let todoCheckbox = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoCheckbox.push(item);
      });
      return todoCheckbox;
    default:
      return state;
  }
};

export default todoListReducer;

/* Test */
// import { ADD_TODO_LIST } from "../actions/todoListAction";

// const initialState = [
//   { id: 1, title: "Buy Burger", completed: false },
//   { id: 2, title: "Learn Redux React", completed: false },
//   { id: 3, title: "Go to Bandung", completed: true },
// ];

// export const todoListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO_LIST:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default todoListReducer;
