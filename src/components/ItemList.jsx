import React, { Component } from 'react';
import TodoItem from './todoItem';

class ItemList extends Component {
  render() { 
    const {items, notifyChecked, notifyDelete} = this.props;
    return (
      <React.Fragment>
        {items.map(item =>
          <TodoItem key={item.id}
            item={item}
            notifyChecked={notifyChecked}
            notifyDelete={notifyDelete}
          />
        )}
      </React.Fragment>
    );
  }
}
 
export default ItemList;