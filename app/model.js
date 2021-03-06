

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

  remove(id) {
    if(!id) return;
    this.todos = this.todos.filter(item => {
      return item.id !== id;
    });
    this.notify();
  }

  complete(id) {
    this.todos = this.todos.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      }
      return item;
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
