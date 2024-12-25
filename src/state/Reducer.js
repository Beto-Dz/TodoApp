export const Reducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [action.payload, ...initialState];
    case "[TODO] toggle todo":
      return initialState.map((todo) =>
        todo.id === action.payload ? ({...todo, done:!todo.done}) : todo
      );
    case "[TODO] drop todo":
      return initialState.filter((todo) => todo.id != action.payload);
    case "[TODO] drop todos completed":
      return initialState.filter((todo) => !todo.done)
    case "[TODO] update description todo":
      return initialState.map(todo => (todo.id === action.payload) ? ({...todo, description: action.handlePayload}) : todo)
    default:
      throw new Error("No se han contemplado todos los cados en Reducer.js");
  }
};
