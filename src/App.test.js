import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUpForm, { BirthdayInput, EmailInput, RequiredInput, PasswordConfirmationInput } from './TeamSignUp.js';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('Dom Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
//test the submit button
describe('Checks on Submit button', () => {
  it('should render the submit button', () => {
    const wrapper = mount(<SignUpForm />);
    expect(wrapper.find("#submitButton").props().disabled).toEqual(true);
  });

  it('should make the submit button active', () => {
    const wrapper = mount(<SignUpForm />);
    wrapper.find('#email').simulate('change', { target: { value: 'a@gmail.com' } });
    wrapper.find('#name').simulate('change', { target: { value: 'Ethan' } });
    wrapper.find('#conf').simulate('change', { target: { value: '123456' } });
    wrapper.find('#birthday').simulate('change', { target: { value: '11/14/95' } });
    wrapper.find('#password').simulate('change', { target: { value: '123456' } });
    expect(wrapper.find("#submitButton").props().disabled).toEqual(false);
  });
});

describe('<EmailInput> component', () => {
  const wrapper = shallow(<EmailInput />);
  const input = wrapper.find('input');

  it('should say need email', () => {
    input.simulate('change', { target: { value: '' } });
    expect(wrapper.find('p').text()).toEqual("we need to know your email address");
  });

  it('should say invalid email', () => {
    input.simulate('change', { target: { value: "myemail" } });
    expect(wrapper.find('p').text()).toEqual("this is not a valid email address");
  });
});

describe('<BirthdayInput> component', () => {
  const wrapper = shallow(<BirthdayInput />);
  const input = wrapper.find('#dob');

  it('should say need birthday', () => {
    input.simulate('change', { target: { value: '' } });
    expect(wrapper.find('p').text()).toEqual("we need to know your birthdate");
  });

  it('should say invalid date', () => {
    input.simulate('change', { target: { value: '123/23/2019' } });
    expect(wrapper.find('p').text()).toEqual("that isn't a valid date");
  });

  it('should say not old enough', () => {
    input.simulate('change', { target: { value: '05/23/2005' } });
    expect(wrapper.find('p').text()).toEqual("sorry, you must be at least 13 to sign up");
  });
});
