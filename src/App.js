import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = { check: false };
    this.checkbox = this.checkbox.bind(this);
  }
  checkbox() {
    this.setState({
      check: !this.state.check
    })
  }



  render() {
    const content = this.state.check ?
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
     : null;

    return (
      <div className="wrapper">
        <label><input type="checkbox" check={ this.state.check} onChange={ this.checkbox } /> Mostrar información importante</label>
        {content}
      </div>
    );
  }
}

export default App;
