import React, {Component} from 'react';
import EditItems from './components/editItems';
import ItemList from './components/ItemList';
import NavBar from './components/navbar';

class App extends Component {
  state = { 
    items: [
      {id: 1, text: "Basic text", checked: false},
      {id: 2, text: "Basic text", checked: false},
      {id: 4, text: "Basic text", checked: false}
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
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar
          numOfIncomplete={this.state.items.filter(i=>!i.checked).length}
        />
        <ItemList 
          items={this.state.items}
          notifyChecked={this.handleChecked}
        />
        <EditItems
          notifySubmit={this.handleSubmit}
        />
      </React.Fragment>
     );
  }
}
 
export default App;