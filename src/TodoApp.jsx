import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

export const TodoApp = () => {
  return (
    <>
      <TodoContextProvider>
        <AddTodo />
        <main className="main">
          <TodoList filter={true} filterFactor={true}  title='Terminados'/>
          <TodoList title='Todos'/>
          <TodoList filter={true} title="Pendientes"/>
        </main>
      </TodoContextProvider>
    </>
  );
};
