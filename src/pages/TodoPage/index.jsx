import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export default function TodoPage() {
  const [todos, setTodos] = useState([])

  const sortDesc = (a, b) => {
    if (a.id > b.id) return -1
    if (a.id < b.id) return 1
    return 0
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        json.sort(sortDesc)
        setTodos(json)
        localStorage.setItem('todos', JSON.stringify(json))
      })
  }, [setTodos])

  const handleAdd = async (todo) => {
    await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: todo,
    })
      .then((resp) => resp.json())
      .then((json) => {
        todo.id = json.id
        const list = [...todos, todo]
        list.sort(sortDesc)
        setTodos(list)
      })
  }

  const handleDelete = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId))
  }

  return (
    <Container maxWidth="sm">
      <TodoForm onSubmit={handleAdd} />
      <div>
        {todos.map((item) => (
          <TodoItem key={item.id} initialValue={item} onDelete={handleDelete} />
        ))}
      </div>
    </Container>
  )
}
