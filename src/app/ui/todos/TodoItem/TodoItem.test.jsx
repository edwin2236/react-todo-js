import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, userEvent } from 'test/test-utils'
import { completeTodo, deleteTaskId } from 'src/__mocks__/todos/features'
import Todo from 'app/data/models/todo'
import DeleteTodoUseCase from 'app/domain/DeleteTodoUseCase'
import UpdateTodoUseCase from 'app/domain/UpdateTodoUseCase'
import TodoItem from '.'

describe('<TodoItem />', () => {
  const onDeleteMock = vi.fn()
  const todo = new Todo(1, 1, 'Test Item Task', false)

  beforeEach(() => {
    render(<TodoItem initialValue={todo} onDelete={onDeleteMock} />)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should validate that task is completed', async () => {
    // arrange
    const updateTodoUseCaseSpy = vi
      .spyOn(UpdateTodoUseCase.prototype, 'call')
      .mockResolvedValue(completeTodo)

    const el = screen.getByText(todo.title)
    const taskStatus = screen.getByRole('checkbox')

    // act
    await userEvent.click(taskStatus)

    // assert
    expect(el).toBeDefined()
    expect(await screen.findByRole('checkbox', { checked: true })).toBeDefined()
    expect(updateTodoUseCaseSpy).toBeCalledWith(completeTodo)
    expect(updateTodoUseCaseSpy).toBeCalledTimes(1)
  })

  test('should validate that can delete task correctly', async () => {
    // arrange
    const deleteTodoUseCaseSpy = vi
      .spyOn(DeleteTodoUseCase.prototype, 'call')
      .mockResolvedValue(deleteTaskId)

    const btnDeleteTask = screen.getByRole('delete-task')

    // act
    await userEvent.click(btnDeleteTask)

    // assert
    expect(deleteTodoUseCaseSpy).toBeCalledWith(todo)
    expect(deleteTodoUseCaseSpy).toBeCalledTimes(1)
  })
})
