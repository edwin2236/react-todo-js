import { describe, expect, test, vi } from 'vitest'
import { adapterTodosSuccessResponse } from 'src/__mocks__/todos/features'
import TodoRepository from 'app/data/repositories/todoRepository'
import GetAllTodosUseCase from '../GetAllTodosUseCase'

describe('GetAllTodosUseCase', () => {
  const useCase = new GetAllTodosUseCase()

  test('should validate success response', async () => {
    // arrange
    let todosResponse
    const repositorySpy = vi
      .spyOn(TodoRepository, 'getAll')
      .mockResolvedValue(adapterTodosSuccessResponse)

    // act
    await useCase.call().then((todos) => {
      todosResponse = todos
    })

    // assert
    expect(todosResponse).toBe(adapterTodosSuccessResponse)
    expect(repositorySpy).toBeCalledTimes(1)
  })

  test('should validate error response', async () => {
    // arrange
    const repositorySpy = vi
      .spyOn(TodoRepository, 'getAll')
      .mockRejectedValue(new Error())

    // assert
    expect(useCase.call()).rejects.toThrowError()
    expect(repositorySpy).toBeCalledTimes(1)
  })
})
