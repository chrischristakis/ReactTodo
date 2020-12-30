import React, { Component } from 'react';
import TodoItem from './todoItem';

class ItemList extends Component {
  render() { 
    const {items, notifyChecked} = this.props;
    return (
      <div>
        {items.map(item =>
          <TodoItem key={item.id}
            item={item}
            notifyChecked={notifyChecked}
          />
        )}
      </div>
    );
  }
}
 
export default ItemList;