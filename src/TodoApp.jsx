import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

export const TodoApp = () => {
  return (
    <>
      <TodoContextProvider>
        <AddTodo />
        <main className="main">
          <TodoList filter={true} title="Pendientes"/>
          <TodoList title='Todas'/>
          <TodoList filter={true} filterFactor={true}  title='Terminadas'/>
        </main>
      </TodoContextProvider>
    </>
  );
};
