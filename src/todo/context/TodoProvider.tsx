import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { TodoReducer } from './TodoReducer';

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false
    },
    {
      id: '2',
      desc: 'Piedra el alma',
      completed: false
    },
  ],
  completed: 0,
  pending: 2
}

export const TodoProvider = ({ children }: props) => {

  const [ todoState, dispatch ] = useReducer(TodoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo,
    }}>
      { children }
    </TodoContext.Provider>
  )
}
