import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import {RequiredInput,PasswordConfirmationInput} from './TeamSignUp';
import ReactTestUtils from 'react-addons-test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
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
