import React, { Component } from 'react';
import TodoItem from './todoItem';

class ItemList extends Component {
  render() { 
    const {items, notifyChecked} = this.props;
    return (
      <React.Fragment>
        {items.map(item =>
          <TodoItem key={item.id}
            item={item}
            notifyChecked={notifyChecked}
          />
        )}
      </React.Fragment>
    );
  }
}
 
export default ItemList;