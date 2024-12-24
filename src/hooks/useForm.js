import { useState } from "react";

export const useForm = (initialState = {}) => {
  // uso de estado para manejar el formulario
  const [stateForm, setStateForm] = useState(initialState);

  // funcion de ayuda al cambiar el valor de un input
  const handlerOnInputChange = ({ target }) => {
    // desestructuracion de target
    const { name, value } = target;
    // nuevo estado, manteniendo el anterior
    // y cambiando el valor del input que cambio
    setStateForm({ ...stateForm, [name]: value });
  };

  // funcion de ayuda para resetear el formulario
  const handlerOnReset = () => {
    setStateForm(initialState);
  };

  return {
    ...stateForm,
    handlerOnInputChange,
    handlerOnReset,
  };
};
