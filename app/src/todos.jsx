import React from 'react';
import TodoItem from './todoitem.jsx';


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
      <input type="text" value={this.state.note} onChange={this.onChange} />
      <button onClick={this.addTodo}>Add</button>
      <ul className="bordered-list default">{ todos.map(this.eachNote) }</ul>
      </div>
    );
  }

})
