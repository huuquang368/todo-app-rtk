// action is simply the object
// action creators => function

export const addTodo = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});
