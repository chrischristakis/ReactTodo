import React, { Component } from 'react';
import TodoItem from './todoItem';
import './itemList.css';

class ItemList extends Component {
  render() { 
    const {items, notifyChecked, notifyDelete} = this.props;
    return (
      <div className="list-wrapper">
        {items.map(item =>
          <TodoItem key={item.id}
            item={item}
            notifyChecked={notifyChecked}
            notifyDelete={notifyDelete}
          />
        )}
      </div>
    );
  }
}
 
export default ItemList;