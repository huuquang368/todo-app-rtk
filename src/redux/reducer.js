const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", complete: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", complete: true, priority: "High" },
    { id: 3, name: "Learn React", complete: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      // no action, return state
      return state;
  }
};

export default rootReducer;
