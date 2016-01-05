import React from 'react';


export default React.createClass({

  removeButton() {
    return (
      <button 
        className="pull-right no-border" 
        onClick={this.props.remove}>X
      </button>
    );
  },

  render() {
    var rmvbtn = this.removeButton();

    return (
      <li>
        {this.props.data.msg}
        {rmvbtn}
      </li>
    );
  }
})
