import { useState } from 'react'
import { IconButton, InputBase } from '@mui/material'
import { AddCircle as AddCircleIcon } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { StyledPaper } from './styles'

function TodoForm({ onSubmit }) {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name.trim() !== '') {
      setName('')
      onSubmit({ userId: 1, title: name.trim(), completed: false })
    }
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <StyledPaper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <IconButton
        sx={{ p: '10px' }}
        aria-label="add"
        type="submit"
        role="add-task"
      >
        <AddCircleIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a task"
        inputProps={{ 'aria-label': 'Add a task' }}
        value={name}
        onChange={handleChange}
      />
    </StyledPaper>
  )
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default TodoForm
