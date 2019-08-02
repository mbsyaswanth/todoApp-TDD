export default class TodoItem {
  id;
  description;
  isCompleted;
  constructor(description) {
    this.id = Date.now();
    this.description = description;
    this.isCompleted = false;
  }
}
