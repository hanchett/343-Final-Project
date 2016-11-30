import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import { shallow } from 'enzyme';
import {RequiredInput,PasswordConfirmationInput} from './TeamSignUp';
import ReactTestUtils from 'react-addons-test-utils';
=======
import EmailInput from './TeamSignUp';
import {shallow} from 'enzyme';
>>>>>>> 7d8ac2725ec10b394bb38150609077fd690a891b

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
<<<<<<< HEAD
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
=======

describe('<EmailInput> component', () => {
  const wrapper = shallow(<EmailInput />);
  const input = wrapper.find('input');
  
  it('should say need email', () => {
    input.stimulate('change', {target:{value:''}});
    expect(wrapper.find('p').text()).toEqual("we need to know your email address");
  });

  it('should say invalid email', () => {
    input.stimulate('cahnge', {target:{value:"myemail"}});
    expect(wrapper.find('p').text()).toEqual("this is not a valid email address");
  });

});

describe('<BirthdayInput> component', () => {
  const wrapper = shallow(<BirthdayInput />);
  const input = wrapper.find('input');

  it('should say need birthday', () => {
    input.stimulate('change', {target:{value:''}});
    expect(wrapper.find('p').text()).toEqual("we need to know your birthdate");
  });

  it('should say invalid date', () => {
    input.stimulate('change', {target:{value:'123/23/2019'}});
    expect(wrapper.find('p').text()).toEqual("that isn't a valid date");
  });

  it('should say not old enough', () => {
    input.stimulate('change', {target:{value:'05/23/2005'}});
    expect(wrapper.find('p').text()).toEqual("sorry, you must be at least 13 to sign up");
  });

});
>>>>>>> 7d8ac2725ec10b394bb38150609077fd690a891b
