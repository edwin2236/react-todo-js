import { describe, expect, test, vi } from 'vitest'
import { deleteTaskId, removedTodo } from 'src/__mocks__/todos/features'
import TodoRepository from 'app/data/repositories/todoRepository'
import DeleteTodoUseCase from '../DeleteTodoUseCase'

describe('AddTodoUseCase', () => {
  const useCase = new DeleteTodoUseCase()
  let todoIdResponse

  test('should validate success response', async () => {
    // arrange
    const repositorySpy = vi
      .spyOn(TodoRepository, 'delete')
      .mockResolvedValue(deleteTaskId)

    // act
    await useCase.call(removedTodo).then((todo) => {
      todoIdResponse = todo
    })

    // assert
    expect(todoIdResponse).toBe(deleteTaskId)
    expect(repositorySpy).toBeCalledTimes(1)
  })

  test('should validate error response', async () => {
    // arrange
    const repositorySpy = vi
      .spyOn(TodoRepository, 'delete')
      .mockRejectedValue(new Error())

    // assert
    expect(useCase.call(removedTodo)).rejects.toThrowError()
    expect(repositorySpy).toBeCalledTimes(1)
  })
})
