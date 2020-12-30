import React, { Component } from 'react';
import './todoItem.css'

class TodoItem extends Component {
  render() {
    const {item, notifyChecked, notifyDelete} = this.props; 
    return (  
      <div>
        <input 
          type="checkbox" 
          onChange={e => notifyChecked(item, e.target.checked)}
          checked={item.checked}
        >
        </input>
        <p>#{item.id} {this.displayText(item)}</p>
        <button onClick={()=>notifyDelete(item)}>Delete</button>
      </div>
    );
  }

  displayText = (item) => {
    return (item.checked) ? <s>{item.text}</s> : item.text;
  };
}
 
export default TodoItem;