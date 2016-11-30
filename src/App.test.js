import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUpForm, { BirthdayInput, EmailInput, RequiredInput, PasswordConfirmationInput } from './TeamSignUp.js';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import ReactTestUtils from 'react-addons-test-utils';


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
    wrapper.find('#email').simulate('change', { target: { value: 'a@gmail.com' } })
    wrapper.find('#dob').simulate('change', { target: { value: '11/14/95' } })
    wrapper.find('#name').simulate('change', { target: { value: 'Ethan' } })
    wrapper.find('#password').simulate('change', { target: { value: '12345678' } })
    var test = wrapper.find('PasswordConfirmationInput').simulate('change', {target: {value:'12345678' }})  //.simulate('change', { target: { value: '12345678' } })
    //console.log('debugging:', test)
   wrapper.root.component.setChildProps({value: '12345'});

    expect(wrapper.find("#submitButton").props().disabled).toEqual(false);
  });
});

//to test if the error message of missing doesn't display when user types in their information
describe('<RequiredInput> component', () => {
  it('no errors.missing message when field is not blank', () => {
      const wrapper = shallow(<RequiredInput />);
      const noMissing = wrapper.find('#noMissing');
      const input = wrapper.find('input');
      wrapper.find('input').simulate('change', {target:{value:'sybil'}});
      expect(noMissing).toEqual(true);
  });
});
//to test if the error message doesn't display when two passwords are the same
describe('<PasswordConfirmationInput> component', () => {
  it('no mismatch message when password matches comfirm password', () => {
      const wrapper = shallow(<PasswordConfirmationInput />);
      const input = wrapper.find('input');
      const noMismatch = wrapper.find('#noMismatch');
      wrapper.find('currentValue').simulate('change', {target:{value:'123456'}});
      wrapper.find('wrapper.props.password').simulate('change', {target:{value:'123456'}});
      expect(noMismatch).toEqual(true);
  });
});

describe('<EmailInput> component', () => {
  it('should say need email', () => {
    const wrapper = shallow(<EmailInput value={''} />);
    expect(wrapper.find('p').text()).toEqual("we need to know your email address");
  });

  it('should say invalid email', () => {
    const wrapper = shallow(<EmailInput value={'myemail'} />);
    expect(wrapper.find('p').text()).toEqual("this is not a valid email address");
  });

  it('should not show an error message', () => {
    const wrapper = shallow(<EmailInput value={'myemail@msn.com'} />);
    expect(wrapper.find('p').length).toEqual(0);
  });
});

describe('<BirthdayInput> component', () => {
  it('should say need birthday', () => {
    const wrapper = shallow(<BirthdayInput value={''} />);
    expect(wrapper.find('p').text()).toEqual("we need to know your birthdate");
  });

  it('should say invalid date', () => {
    const wrapper = shallow(<BirthdayInput value={'what??'} />);
    expect(wrapper.find('p').text()).toEqual("that isn\'t a valid date");
  });

  it('should say not old enough', () => {
    const wrapper = shallow(<BirthdayInput value={'05/23/2005'} />);
    expect(wrapper.find('p').text()).toEqual("sorry, you must be at least 13 to sign up");
  });

  it('should not show an error message', () => {
    const wrapper = shallow(<BirthdayInput value={'05/23/1990'} />);
    expect(wrapper.find('p').length).toEqual(0);
  });
});

