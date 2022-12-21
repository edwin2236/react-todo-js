import Todo from '../models/todo'

/**
 *
 * @param {object} json
 * @returns Todo
 */
export default function fromJsonToTodoAdapter(json) {
  return new Todo(json.userId, json.id, json.title, json.completed)
}
