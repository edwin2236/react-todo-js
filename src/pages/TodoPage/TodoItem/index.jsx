import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { StyledCard, StyledTypography } from './styles'

function TodoItem({ initialValue, onDelete }) {
  const [todo, setTodo] = useState(initialValue)
  const label = { inputProps: { 'aria-label': todo.title } }

  const handleChange = async (event) => {
    const newValue = { ...todo, completed: event.target.checked }
    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PUT',
      body: newValue,
    }).then(() => {
      setTodo(newValue)
    })
  }

  const handleDelete = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'DELETE',
    }).then(() => {
      onDelete(todo.id)
    })
  }

  return (
    <StyledCard elevation={0}>
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
      <IconButton color="error" onClick={handleDelete}>
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
