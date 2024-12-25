import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

export const TodoApp = () => {
  return (
    <>
      <TodoContextProvider>
        <AddTodo />
        <main className="main">
          <TodoList filter={true} filterFactor={true}  title='Terminadas'/>
          <TodoList title='Todas'/>
          <TodoList filter={true} title="Pendientes"/>
        </main>
      </TodoContextProvider>
    </>
  );
};
