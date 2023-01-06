import TodoRepository from 'app/data/repositories/todoRepository'

export default class DeleteTodoUseCase {
  async call(todo) {
    return TodoRepository.delete(todo)
  }
}
