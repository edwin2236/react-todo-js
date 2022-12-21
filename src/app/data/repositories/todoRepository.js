import Router from '../../core/utils/router'
import fromJsonToTodoAdapter from '../adapters/fromJsonToTodoAdapter'

const BASE_URL = import.meta.env.VITE_TODO_API_BASE_URL

export default class TodoRepository {
  /**
   *
   * @returns {Promise<Todo[]>}
   */
  static async getAll() {
    return fetch(BASE_URL + Router.todosApi)
      .then((response) => response.json())
      .then((data) => data.map((item) => fromJsonToTodoAdapter(item)))
  }

  /**
   *
   * @param {Todo} todo
   * @returns {Promise<Todo>}
   */
  static async add(todo) {
    return await fetch(BASE_URL + Router.todosApi, {
      method: 'POST',
      body: todo,
    }).then((resp) => {
      todo.id = resp.id
      return todo
    })
  }

  /**
   *
   * @param {Todo} todo
   * @returns {Promise<Todo>}
   */
  static async update(todo) {
    return fetch(BASE_URL + Router.todosWithIdApi.replace(':id', todo.id), {
      method: 'PUT',
      body: todo,
    }).then(() => todo)
  }

  /**
   *
   * @param {Todo} todo
   * @returns {void}
   */
  static async delete(todo) {
    return fetch(BASE_URL + Router.todosWithIdApi.replace(':id', todo.id), {
      method: 'DELETE',
    }).then(() => todo)
  }
}
