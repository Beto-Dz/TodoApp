import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import trash from '../assets/trash.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export const TodoItem = ({ id, description, done }) => {
  // uso de contexto
  const {handleToggleTodo, handleDropTodo} = useContext(TodoContext);

  return (
    <li className="TodoItem">
      <span className="TodoItemText">
        {description}
      </span>
      <span className="TodoItemButtons">
        <button className={`btn_cta ${done ? 'taskUnDo' : 'taskDo'}` } onClick={() => {handleToggleTodo(id)}} >
          <img src={ done ? dislike : like } alt="Image button" />
        </button>
        <button className="btn_cta buttonTodoItemDrop" onClick={() => {handleDropTodo(id)}}>
          <img src={trash} alt="trash image" />
        </button>
      </span>
    </li>
  );
};
