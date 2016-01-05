

export class App {

  constructor() {
    this.todos = [];
    this.observers = [];
  }

  add(title) {
    this.todos = this.todos.concat({
      id: title,
      msg: title,
      completed: false
    });
    this.notify();
  }

  notify() {
    this.observers.forEach(cb => cb());
  }

  subscribe(cb) {
    this.observers.push(cb);
  }

}
