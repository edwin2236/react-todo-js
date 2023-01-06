import Todo from 'app/data/models/todo'

/**
 *
 * @param {object} json
 * @returns Todo
 */
export default function fromJsonToTodoAdapter(json) {
  return new Todo(json.userId, json.id, json.title, json.completed)
}
