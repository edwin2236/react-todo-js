export default class Todo {
  /**
   * @param {number} userId
   * @param {number} id
   * @param {string} title
   * @param {boolean} completed
   */
  constructor(userId, id, title, completed) {
    this.userId = userId
    this.id = id
    this.title = title
    this.completed = completed
  }
}
