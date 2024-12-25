import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { ClearList } from "./ClearList";

export const TodoList = ({ filter = false, filterFactor = false, title = "" }) => {
  // obteniendo los todos del contexto
  let { todos, handleDropCompletedTodos} = useContext(TodoContext);

  // si se ha habilitado el filtro
  if (filter) {
    // hace el filtrado de acuerdo al estado de la tarea
    todos = todos.filter(todo => todo.done === filterFactor)
  }

  return (
    <>
      <ul className="TodoList">
        <h2 className="TodoListTittle">{`${title} - ${todos.length}`} {filterFactor && <button onClick={handleDropCompletedTodos}>Eliminar</button>} </h2>
        {(todos && todos.length > 0)
          ? todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
          : <ClearList />}
      </ul>
    </>
  );
};
