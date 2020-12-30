import React, {Component} from 'react';
import EditItems from './components/editItems';
import ItemList from './components/ItemList';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  state = { 
    items: [
      {id: 1, text: "Laundry", checked: false},
      {id: 2, text: "Rent payment", checked: false},
      {id: 3, text: "Work", checked: false},
      {id: 4, text: "Exercise!", checked: false}
    ]
  }

  handleChecked = (item, checked) => {
    const index = this.state.items.indexOf(item);
    const items = [...this.state.items];
    items[index] = {...item};
    items[index].checked = checked;
    this.setState({items: items});
  };

  handleSubmit = (input) => {
    const items = [...this.state.items];

    //This is to find the lowest possible unique number to use
    //as an id for a new todo item.
    let lowestId = 1;
    let ind = items.map(e=>e.id).indexOf(lowestId); //Find any item with the id of lowestId
    while(ind !== -1) //Search until index of id is not found (meaning we can use this id.)
    {
      lowestId++;
      ind = items.map(e=>e.id).indexOf(lowestId);
    }
    //This makes sure the newly added item is in order 
    //(id 3 should be in 3rd position, before 4. Even if newly added.)
    items.splice(lowestId-1,0,{id:lowestId, text:input, checked:false});
    this.setState({items:items});
  };

  handleDelete = (item) => {
    //1>new array with item filtered out.
    let items = this.state.items.filter(e=>e.id!==item.id);
    //2>change everything only above the deleted element.
    let toChange = items.slice(item.id-1);
    //3>use map on everything above to shift their ids down by 1
    toChange = toChange.map(e=>({id:e.id-1,text:e.text,checked:false}));
    //4>update state using new mapped array
    items = items.slice(0, item.id-1).concat(toChange);
    this.setState({items:items});
  };

  render() { 
    return (
      <React.Fragment>
        <NavBar
          numOfIncomplete={this.state.items.filter(e=>!e.checked).length}
        />
        <div className="todo-wrapper">
          <ItemList
            items={this.state.items}
            notifyChecked={this.handleChecked}
            notifyDelete={this.handleDelete}
          />
          <EditItems
            notifySubmit={this.handleSubmit}
          />
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;