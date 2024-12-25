import { useReducer } from "react";
import { Reducer } from "../state/Reducer";
import { useEffect } from "react";

// funcion para iniciar primer estado, array todos si esxiste en el storage
// o un array vacio
const initialState = () => {
  return JSON.parse(window.localStorage.getItem("todos")) || [];
};
export const useTodo = () => {
  // usando el reducer, con un estado inicial, desestructurando el estado
  // y la funcion despachadora
  const [todos, dispatch] = useReducer(Reducer, initialState());

  // efecto secundario para guardar los todos en el localstorage
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // funcion de ayuda para agregar todo al estado
  const handleAddTodo = (todo = {}) => {
    dispatch({
      type: "[TODO] add todo",
      payload: todo,
    });
  };

  // funcion de ayuda para hacer toggle de todo
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] toggle todo",
      payload: id,
    });
  };

  // funcion de ayuda para eliminar un todo
  const handleDropTodo = (id) => {
    dispatch({
      type: "[TODO] drop todo",
      payload: id,
    });
  };

  // funcion de ayuda para eliminar los todos compleados
  const handleDropCompletedTodos = () => {
    dispatch({
      type: "[TODO] drop todos completed"
    })
  }

  // funcion de ayuda para actualizar descripcion de un todo
  const handleUpdateTodo = (todo = {}) => {
    dispatch({
      type: "[TODO] update description todo",
      payload: todo.id,
      handlePayload: todo.description
    })
  }

  return {
    todos,
    handleAddTodo,
    handleToggleTodo,
    handleDropTodo,
    handleDropCompletedTodos,
    handleUpdateTodo
  };
};
