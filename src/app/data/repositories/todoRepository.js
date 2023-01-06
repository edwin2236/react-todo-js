import Router from 'app/shared/utils/router'
import fromJsonToTodoAdapter from 'app/data/adapters/fromJsonToTodoAdapter'

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
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((resp) => {
        todo.id = resp.id
        return fromJsonToTodoAdapter(todo)
      })
  }

  /**
   *
   * @param {Todo} todo
   * @returns {Promise<Todo>}
   */
  static async update(todo) {
    return fetch(
      BASE_URL + Router.todosWithIdApi.replace(':id', todo.id.toString()),
      {
        method: 'PUT',
        body: JSON.stringify(todo),
      }
    ).then(() => todo)
  }

  /**
   *
   * @param {Todo} todo
   * @returns {Promise<number>}
   */
  static async delete(todo) {
    return fetch(
      BASE_URL + Router.todosWithIdApi.replace(':id', todo.id.toString()),
      {
        method: 'DELETE',
      }
    ).then(() => todo.id)
  }
}
