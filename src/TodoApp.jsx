import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

export const TodoApp = () => {
  return (
    <>
      <TodoContextProvider>
        <AddTodo />
        <TodoList />
      </TodoContextProvider>
    </>
  );
};
