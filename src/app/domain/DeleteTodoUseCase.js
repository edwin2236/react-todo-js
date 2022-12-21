import TodoRepository from '../data/repositories/todoRepository'

export default class DeleteTodoUseCase {
  async call(todo) {
    return TodoRepository.delete(todo)
  }
}
