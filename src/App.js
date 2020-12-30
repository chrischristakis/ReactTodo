import React, {Component} from 'react';
import ItemList from './components/ItemList';
import NavBar from './components/navbar';

class App extends Component {
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
      <React.Fragment>
        <NavBar
          numOfIncomplete={this.state.items.filter(i=>!i.checked).length}
        />
        <ItemList 
          items={this.state.items}
          notifyChecked={this.handleChecked}
        />
      </React.Fragment>
     );
  }
}
 
export default App;