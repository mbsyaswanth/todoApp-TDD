export default class todoItem {
  id;
  description;
  isCompleted;
  constructor(description) {
    this.id = Date.now();
    this.description = description;
    this.isCompleted = false;
  }
}
