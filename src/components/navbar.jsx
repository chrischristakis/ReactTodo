import React from 'react';
import './navbar.css';

const NavBar = ({numOfIncomplete}) => {
  return (
    <header> 
      <h1>React Todo List!</h1>
      <h3>Remaining items: {(numOfIncomplete)?numOfIncomplete:"All done! 🎉"}</h3>
    </header>
  );
}
 
export default NavBar;