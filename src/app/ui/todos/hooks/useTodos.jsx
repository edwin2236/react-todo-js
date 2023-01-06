import { useEffect, useState } from 'react'
import GetAllTodosUseCase from 'app/domain/GetAllTodosUseCase'
import AddTodoUseCase from 'app/domain/AddTodoUseCase'

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
    addTodoUseCase.call(todo).then((newTodo) => {
      const list = [...todos, newTodo]
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
