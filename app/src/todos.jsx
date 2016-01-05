import React from 'react';


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
  },

  eachNote(msg) {
    
  },

  render() {
    var todos = this.props.model.todos;
    return (
      <div className="container border-curved">
      <input type="text" value={this.state.note} onChange={this.onChange} />
      <button onClick={this.addTodo}>Add</button>
      <ul>{ todos.map(this.eachNote) }</ul>
      </div>
    );
  }

})
