import TodoRepository from 'app/data/repositories/todoRepository'

export default class GetAllTodosUseCase {
  async call() {
    return TodoRepository.getAll()
  }
}
