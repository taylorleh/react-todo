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

  addTodo() {
    this.props.model.add(this.state.note);
    this.setState({note: ''});
  },

  removeToDo(item) {
    if(item && item.id) {
      this.props.model.remove(item.id);
    }
  },

  keyDown(event) {
    if(event.which !== 13) return;
    this.addTodo();
  },

  eachNote(item, ind) {
    return (
      <TodoItem
        key={ind}
        data={item}
        remove={this.removeToDo.bind(null, item)} />
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
