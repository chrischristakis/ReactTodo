import React, { Component } from 'react';

class EditItems extends Component {
  state = {
    input:''
  }

  handleChange = (input) => {
    this.setState({input: input});
  };

  render() { 
    return ( 
      <div>
        <input type="text" maxLength="70" onChange={e=>this.handleChange(e.target.value)}/>
        <button onClick={()=>this.props.notifySubmit(this.state.input)}>Add!</button>
      </div>
    );
  }
}
 
export default EditItems;