import { createSelector } from "reselect";
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

// redux-toolkit auto import reselect

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) =>
    todoList.filter((todo) => todo.name.includes(searchText))
);
