import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  // obteniendo los todos del contexto

  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos && todos.length > 0
        ? todos.map((todo) => <TodoItem {...todo} />)
        : ""}
    </ul>
  );
};
