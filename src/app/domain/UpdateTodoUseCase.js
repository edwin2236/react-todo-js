import TodoRepository from 'app/data/repositories/todoRepository'

export default class UpdateTodoUseCase {
  async call(todo) {
    return TodoRepository.update(todo)
  }
}
