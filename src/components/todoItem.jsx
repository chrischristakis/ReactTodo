import React, { Component } from 'react';
import './todoItem.css'

class TodoItem extends Component {
  render() {
    const {item} = this.props; 
    return (  
      <div>
        <input 
          type="checkbox" 
          onChange={e => this.props.notifyChecked(item, e.target.checked)}
        >
        </input>
        <p>#{item.id} {this.displayText(item)}</p>
      </div>
    );
  }

  displayText = (item) => {
    return (item.checked) ? <s>{item.text}</s> : item.text;
  };
}
 
export default TodoItem;