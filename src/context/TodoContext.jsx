import { createContext } from "react";
import { useTodo } from "../hooks/useTodo";

// creacion de estado
export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  return (
    <TodoContext.Provider value={useTodo()}>
        {children}
    </TodoContext.Provider>
  );
};
