import { Container } from '@mui/material'
import useTodos from './hooks/useTodos'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export default function TodoPage() {
  const { todos, addTodo, deleteTodo } = useTodos()
  return (
    <Container maxWidth="sm">
      <TodoForm onSubmit={addTodo} />
      <div>
        {todos.map((item) => (
          <TodoItem key={item.id} initialValue={item} onDelete={deleteTodo} />
        ))}
      </div>
    </Container>
  )
}
