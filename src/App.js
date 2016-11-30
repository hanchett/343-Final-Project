import React, { Component } from 'react';
import SignUpForm from './TeamSignUp.js';

class App extends Component { 
  constructor(props) {
    super(props)
    this.state = { 'formSuccess': false };
    this.formSub = this.formSub.bind(this);
  }
  formSub(value) {
    this.setState({ formSuccess: value });
  }
  render() {
    var show = <div></div>
    if (this.state.formSuccess === true) {
      show = <div className="alert alert-success" role="alert">Your form was submitted successfully!</div>;
    }
    return (
      <div className="App">
        <div className="App-header">
          {show}
          <h2>Welcome to our Form!</h2>
        </div>
        <p className="App-intro">
          To get started, enter your information below. Must be 13 or older to apply.
        </p>
        <SignUpForm submitCallback={this.formSub} />
      </div>
    );
  }
}

export default App;
