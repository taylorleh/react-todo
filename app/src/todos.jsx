import React from 'react';
import TodoItem from './todoitem.jsx';

const ENTER_KEY = 13;

export default React.createClass({

  getInitialState() {
    return { note: '' };
  },

  onChange(event) {
    var val = event.target.value;
    this.setState({ note: val });
  },

  // adds a todo to the model... invoked from child component
  addTodo() {
    this.props.model.add(this.state.note);
    this.setState({note: ''});
  },

  // removes a todo from the model... invoked from child component
  removeToDo(item) {
    if(item && item.id) {
      this.props.model.remove(item.id);
    }
  },

  complete(item) {
    this.props.model.complete(item.id);
  },

  // focuses input field and adds todo if enter ket
  keyDown(event) {
    if(event.which !== 13) return;
    this.addTodo();
  },

  // invoked by render method to initialize list item component
  eachNote(item, ind) {
    return (
      <TodoItem
        key={ind}
        data={item}
        remove={this.removeToDo.bind(null, item)}
        complete={this.complete.bind(null, item)} />
    );
  },

  render() {
    var todos = this.props.model.todos;
    return (
      <div className="container border-curved">
      <input type="text" value={this.state.note} onKeyDown={this.keyDown} onChange={this.onChange} />
      <button onClick={this.addTodo}>Add</button>
      <ul className="bordered-list default">{ todos.map(this.eachNote) }</ul>
      </div>
    );
  }

})
