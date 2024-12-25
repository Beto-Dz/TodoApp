import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { ClearList } from "./ClearList";
import { ModalUpdateTodo } from "./ModalUpdateTodo";

export const TodoList = ({ filter = false, filterFactor = false, title = "" }) => {
  // obteniendo los todos del contexto
  let { todos, handleDropCompletedTodos} = useContext(TodoContext);

  // estado para establecer informacion del modal
  const [informationModal, setInformationModal] = useState({showModal: false, todo: {}})

  // desestructurando el estado
  const {showModal, todo} = informationModal;

  //funcion de ayuda para mostrar el modal
  const handleShowModal = () => {
    console.log(showModal)
    setInformationModal({...informationModal, showModal: !showModal})
  }

  // funcion para establecer un estado
  const handleSetInformationModal = (todo = {}) => {
    setInformationModal({showModal: !showModal, todo: todo})
  }

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
          ? todos.map((todo) => <TodoItem key={todo.id} {...todo} handleSetInformationModal={handleSetInformationModal} />)
          : <ClearList />}
      </ul>
      <ModalUpdateTodo isOpen={showModal} onClose={handleShowModal} title="Editar tarea" todo={todo} />
    </>
  );
};
