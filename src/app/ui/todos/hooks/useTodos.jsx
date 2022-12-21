import { useEffect, useState } from 'react'
import AddTodoUseCase from '../../../domain/AddTodoUseCase'
import GetAllTodosUseCase from '../../../domain/GetAllTodosUseCase'

export default function useTodos() {
  const [todos, setTodos] = useState([])
  const getAllTodosUseCase = new GetAllTodosUseCase()
  const addTodoUseCase = new AddTodoUseCase()

  const sortDesc = (a, b) => {
    if (a.id > b.id) return -1
    if (a.id < b.id) return 1
    return 0
  }

  useEffect(() => {
    getAllTodosUseCase.call().then((resp) => {
      resp.sort(sortDesc)
      setTodos(resp)
    })
  }, [])

  const addTodo = async (todo) => {
    addTodoUseCase.call(todo).then((todo) => {
      const list = [...todos, todo]
      list.sort(sortDesc)
      setTodos(list)
    })
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId))
  }

  return {
    todos,
    addTodo,
    deleteTodo,
  }
}
