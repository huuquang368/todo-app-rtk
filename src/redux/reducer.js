import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// explain combineReducer (equal)
// const rootReducer = (state = {}, action) => ({
//   filters: filterReducer(state.filters, action),
//   todoList: todoListReducer(state.todoList, action),
// });

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
