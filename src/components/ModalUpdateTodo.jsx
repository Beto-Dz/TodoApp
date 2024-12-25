import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import "./Modal.css";
import { TodoContext } from "../context/TodoContext";

export const ModalUpdateTodo = ({ isOpen, onClose, title, todo }) => {
  // si no se ha habilitado que se muestre, se regresa
  if (!isOpen) return;

  const {handleUpdateTodo} = useContext(TodoContext)

  // uso de hook para el input
  const { todoDescription, handlerOnInputChange, handlerOnReset } = useForm({ todoDescription: todo.description });

   // funcion de ayuda para manejar el envio del formulario
  const handlerOnSubmit = (e) => {
    //previene el comportamiento por defecto
    e.preventDefault();

    if(todoDescription.trim().length < 3) return

    handleUpdateTodo({...todo, description: todoDescription});

    handlerOnReset();

    onClose();
  };

  // funcion de ayuda para shorthand
  const handleShortHand = (e) => {
    if(e.code === 'Enter'){
      handlerOnSubmit(e);
    }
  }

  return (
    <dialog open className="modal" >
      <section className="modal__section">
        <header className="modal__content">
          <h3>{title}</h3>
          <form onSubmit={handlerOnSubmit} className="AddTodoForm" style={{height: '100%', width: '100%'}} onKeyUp={handleShortHand}>
            <textarea
              type="text"
              name="todoDescription"
              id="input"
              value={todoDescription}
              onChange={handlerOnInputChange}
              className="AddTodoInput" 
              required autoFocus
              placeholder="¿Qué hay que hacer?"
              style={{resize: 'none'}}
              />
          </form>
        </header>
        <footer className="modal__footer">
          <button onClick={handlerOnSubmit} className="taskDo">
            Confirmar
          </button>
          <button onClick={onClose} className="modal-close-btn">
            Cancelar
          </button>
        </footer>
      </section>
    </dialog>
  );
};
