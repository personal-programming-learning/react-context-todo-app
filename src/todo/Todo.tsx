import { Label } from "./components/Label"
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"


export const Todo = () => {
  return (
    <TodoProvider>
      <Label />
      <TodoList />
    </TodoProvider>
  )
}
