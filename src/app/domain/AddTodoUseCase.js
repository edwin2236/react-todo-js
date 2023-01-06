import TodoRepository from 'app/data/repositories/todoRepository'

export default class AddTodoUseCase {
  async call(todo) {
    return TodoRepository.add(todo)
  }
}
