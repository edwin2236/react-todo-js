import TodoRepository from '../data/repositories/todoRepository'

export default class AddTodoUseCase {
  async call(todo) {
    return TodoRepository.add(todo)
  }
}
