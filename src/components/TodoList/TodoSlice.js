const initState = [
  { id: 1, name: "Learn Yoga", complete: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", complete: true, priority: "High" },
  { id: 3, name: "Learn React", complete: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      // no action, return state
      return state;
  }
};

export default todoListReducer;
