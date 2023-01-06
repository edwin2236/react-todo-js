import { Container } from '@mui/material'
import useTodos from 'app/ui/todos/hooks/useTodos'
import TodoForm from 'app/ui/todos/TodoForm/index'
import TodoItem from 'app/ui/todos/TodoItem/index'

export default function TodoPage() {
  const { todos, addTodo, deleteTodo } = useTodos()

  return (
    <Container maxWidth="sm">
      <TodoForm onSubmit={addTodo} />
      <div role="todo-items-container">
        {todos.map((item) => (
          <TodoItem key={item.id} initialValue={item} onDelete={deleteTodo} />
        ))}
      </div>
    </Container>
  )
}
