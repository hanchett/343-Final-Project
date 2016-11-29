import React, { Component } from 'react';
import SignUpForm from './TeamSignUp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to our Form!</h2>
        </div>
        <p className="App-intro">
          To get started, enter your information below. Must be 13 or older to apply. 
        </p>
        <SignUpForm/>
      </div>
    );
  }
}

export default App;
