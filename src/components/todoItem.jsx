import React, { Component } from 'react';
import './todoItem.css'

class TodoItem extends Component {
  render() {
    const {item, notifyChecked, notifyDelete} = this.props; 
    return (  
      <div className="item">
        <input 
          type="checkbox" 
          onChange={e => notifyChecked(item, e.target.checked)}
          checked={item.checked}
        >
        </input>
        <p>#{item.id} <span className="todo-text">{this.displayText(item)}</span></p>
        <button onClick={()=>notifyDelete(item)} className="deleteBtn">Delete</button>
      </div>
    );
  }

  displayText = (item) => {
    return (item.checked) ? <s>{item.text}</s> : item.text;
  };
}
 
export default TodoItem;