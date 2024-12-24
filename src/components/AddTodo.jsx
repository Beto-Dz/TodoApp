import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { TodoContext } from "../context/TodoContext";

export const AddTodo = () => {
  // uso de hook para el input
  const { todoDescription, handlerOnInputChange, handlerOnReset } = useForm({
    todoDescription: "",
  });

  // uso de contexto para agregar todo
  const { handleAddTodo } = useContext(TodoContext);

  // funcion de ayuda para manejar el envio del formulario
  const handlerOnSubmit = (e) => {
    //previene el comportamiento por defecto
    e.preventDefault();
    handleAddTodo({
      id: new Date().getTime() * 3,
      description: todoDescription,
      done: false,
    });
  };

  return (
    <form onSubmit={handlerOnSubmit} className="AddTodoForm" >
      <input
        type="text"
        name="todoDescription"
        min={3}
        value={todoDescription}
        onChange={handlerOnInputChange}
        placeholder="¿Qué hay que hacer?"
        required
        className="AddTodoInput"
      />
    </form>
  );
};
