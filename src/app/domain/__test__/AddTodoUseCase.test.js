import { describe, expect, test, vi } from 'vitest'
import { newTodo } from 'src/__mocks__/todos/features'
import TodoRepository from 'app/data/repositories/todoRepository'
import AddTodoUseCase from '../AddTodoUseCase'

describe('AddTodoUseCase', () => {
  const useCase = new AddTodoUseCase()
  let todoResponse
  const jsonTodo = { userId: 1, title: 'Test Item task 4', completed: false }

  test('should validate success response', async () => {
    // arrange

    const repositorySpy = vi
      .spyOn(TodoRepository, 'add')
      .mockResolvedValue(newTodo)

    // act
    await useCase.call(jsonTodo).then((todo) => {
      todoResponse = todo
    })

    // assert
    expect(todoResponse).toBe(newTodo)
    expect(repositorySpy).toBeCalledTimes(1)
  })

  test('should validate error response', async () => {
    // arrange
    const repositorySpy = vi
      .spyOn(TodoRepository, 'add')
      .mockRejectedValue(new Error())

    // assert
    expect(useCase.call(jsonTodo)).rejects.toThrowError()
    expect(repositorySpy).toBeCalledTimes(1)
  })
})
