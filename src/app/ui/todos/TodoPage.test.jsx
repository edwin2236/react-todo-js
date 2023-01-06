import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, userEvent } from 'test/test-utils'
import TodoPage from 'app/ui/todos/TodoPage'

vi.mock('fetch')

describe('<TodoPage />', () => {
  beforeEach(() => {
    render(<TodoPage />)
  })

  test('should validate that <TodoForm /> rendered correctly', () => {
    // arrange
    const el = screen.getByPlaceholderText('Add a task')

    // act

    // assert
    expect(el).toBeDefined()
  })

  test('should validate that add new todo correctly', async () => {
    // arrange
    const input = screen.getByPlaceholderText('Add a task')
    const btn = screen.getByRole('add-task')

    // act
    await userEvent.type(input, 'Task test')
    await userEvent.click(btn)

    // assert
    expect(screen.queryByText('Task test')).toBeDefined()
    expect(input.textContent).toBe('')
  })

  test('should validate that <TodoItem /> rendered correctly', async () => {
    // arrange
    const items = await screen.findAllByRole('todo-item')

    // act

    // assert
    expect(items).toHaveLength(200)
  })
})
