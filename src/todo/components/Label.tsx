
import { useTodos } from '../hooks/useTodos';

export const Label = () => {

  const { pendingTodos } = useTodos();

  return (
    <h1>
      Todos: { pendingTodos.length }
    </h1>
  )
}
