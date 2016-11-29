import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUpForm from './TeamSignUp.js';
import {shallow,mount} from 'enzyme';
import sinon from 'sinon';

describe('Dom Test', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

})

describe('Checks on Submit button', () => {

  it('should render the submit button', () => {
   const wrapper = mount(<SignUpForm />);
    expect(wrapper.find("#submitButton").props().disabled).toEqual(true);
  });

    it('should make the submit button active', () => {
   const wrapper = mount(<SignUpForm />);
   wrapper.find('#email').simulate('change', {target:{value:'a@gmail.com'}})
   /wrapper.find('#birthday').simulate('change', {target:{value:'11/14/95'}})
    wrapper.find('#name').simulate('change', {target:{value:'Ethan'}})
    wrapper.find('#password').simulate('change', {target:{value:'123456'}})
    wrapper.find('#conf').simulate('change', {target:{value:'123456'}})
    expect(wrapper.find("#submitButton").props().disabled).toEqual(false);
  });
  })

