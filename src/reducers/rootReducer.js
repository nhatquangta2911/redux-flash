const initialState = {
  todos: [
    { id: 1, title: "Cram Typescript" },
    { id: 2, title: "Overview Redux" }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case "DELETE_TODO":
      let result = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: result
      };
  }
  return state;
};

export default rootReducer;
