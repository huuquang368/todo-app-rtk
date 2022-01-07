// action is simply the object
// action creators => function

export const addTodo = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const searchFilterChange = (text) => ({
  type: "filters/searchFilterChange",
  payload: text,
});

export const statusFilterChange = (status) => ({
  type: "filters/statusFilterChange",
  payload: status,
});
