import Todo from 'app/data/models/todo'

export const completeTodo = new Todo(1, 1, 'Test Item Task', true)
export const incompleteTodo = new Todo(1, 1, 'Test Item Task', false)
export const deleteTaskId = 1

export const newTodo = new Todo(1, 4, 'Test Item task 4', false)
export const updatedTodo = new Todo(1, 4, 'Test Item task 4 updated', false)
export const removedTodo = new Todo(1, 1, 'Test Item task 1', false)

export const adapterTodosSuccessResponse = [
  new Todo(1, 1, 'Test Item task 1', true),
  new Todo(1, 2, 'Test Item task 2', false),
  new Todo(1, 3, 'Test Item task 3', true),
]
