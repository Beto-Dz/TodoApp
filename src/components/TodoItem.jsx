export const TodoItem = ({ id, description, done }) => {
  return <li>{`${id} - ${description} - ${done}`}</li>;
};
