import { describe, expect, test, vi } from 'vitest'
import { deleteTaskId, newTodo, removedTodo, updatedTodo } from 'src/__mocks__/todos/features'
import TodoRepository from 'app/data/repositories/todoRepository'
import UpdateTodoUseCase from '../UpdateTodoUseCase'

describe('AddTodoUseCase', () => {
  const useCase = new UpdateTodoUseCase()
  let todoResponse

  test('should validate success response', async () => {
    // arrange
    const repositorySpy = vi
      .spyOn(TodoRepository, 'update')
      .mockResolvedValue(updatedTodo)

    // act
    await useCase.call(newTodo).then((todo) => {
      todoResponse = todo
    })

    // assert
    expect(todoResponse).toBe(updatedTodo)
    expect(repositorySpy).toBeCalledTimes(1)
  })

  test('should validate error response', async () => {
    // arrange
    const repositorySpy = vi
      .spyOn(TodoRepository, 'update')
      .mockRejectedValue(new Error())

    // assert
    expect(useCase.call(newTodo)).rejects.toThrowError()
    expect(repositorySpy).toBeCalledTimes(1)
  })
})
