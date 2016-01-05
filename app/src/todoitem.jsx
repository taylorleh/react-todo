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
    var classes = "";
    if(this.props.data.completed) {
      classes += 'complete';
    }

    return (
      <li className={classes}>
        <input className="pull-left" type="checkbox" onChange={this.props.complete} />
        {this.props.data.msg}
        {rmvbtn}
      </li>
    );
  }
})
