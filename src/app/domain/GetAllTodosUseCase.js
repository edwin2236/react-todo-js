import TodoRepository from '../data/repositories/todoRepository'

export default class GetAllTodosUseCase {
  async call() {
    return TodoRepository.getAll()
  }
}
