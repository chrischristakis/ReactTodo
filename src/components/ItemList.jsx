import React, { Component } from 'react';
import TodoItem from './todoItem';

class ItemList extends Component {
  state = { 
    items: [
      {id: 1, text: "Basic text", checked: false},
      {id: 2, text: "Basic text", checked: false}
    ]
  }

  handleChecked = (item, checked) => {
    const index = this.state.items.indexOf(item);
    const items = [...this.state.items];
    items[index] = {...item};
    items[index].checked = checked;
    this.setState({items: items});
  };

  render() { 
    return (
      <div>
        {this.state.items.map(item =>
          <TodoItem key={item.id}
            item={item}
            notifyChecked={this.handleChecked}
          />
        )}
      </div>
    );
  }
}
 
export default ItemList;