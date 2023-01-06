import { useState } from 'react'
import { Checkbox, IconButton } from '@mui/material'
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import UpdateTodoUseCase from 'app/domain/UpdateTodoUseCase'
import DeleteTodoUseCase from 'app/domain/DeleteTodoUseCase'
import PropTypes from 'prop-types'
import { StyledCard, StyledTypography } from './styles'

function TodoItem({ initialValue, onDelete }) {
  const [todo, setTodo] = useState(initialValue)
  const updateTodoUseCase = new UpdateTodoUseCase()
  const deleteTodoUseCase = new DeleteTodoUseCase()
  const label = { inputProps: { 'aria-label': todo.title } }

  const handleChange = async (event) => {
    const newValue = { ...todo, completed: event.target.checked }
    await updateTodoUseCase.call(newValue).then(() => setTodo(newValue))
  }

  const handleDelete = async () => {
    await deleteTodoUseCase.call(todo).then((todoId) => {
      console.log({ todoId })
      onDelete(todoId)
    })
  }

  return (
    <StyledCard elevation={0} role="todo-item">
      <Checkbox
        {...label}
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
        checked={todo.completed}
        onChange={handleChange}
        sx={{
          color: '#fc76a1',
          '&.Mui-checked': {
            color: '#fc76a1',
          },
        }}
      />
      <StyledTypography
        variant="body1"
        completed={todo.completed ? 'completed' : null}
      >
        {todo.title}
      </StyledTypography>
      <IconButton role="delete-task" color="error" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </StyledCard>
  )
}

TodoItem.propTypes = {
  initialValue: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TodoItem
