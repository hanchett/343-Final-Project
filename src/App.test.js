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
    wrapper.find('#email').simulate('change', { target: { value: 'a@gmail.com' } })
    wrapper.find('BirthdayInput').simulate('change', { target: { value: '11/14/95' } })
    wrapper.find('#name').simulate('change', { target: { value: 'Ethan' } })
    wrapper.find('#password').simulate('change', { target: { value: '12345678' } })
    wrapper.find('PasswordConfirmationInput').simulate('change', { target: { value: '123456' } })

    expect(wrapper.find("#submitButton").props().disabled).toEqual(false);
  });
});

describe('<EmailInput> component', () => {
  it('should say need email', () => {
    const wrapper = shallow(<EmailInput value={' '} />);
    expect(wrapper.find('p').text()).toEqual("we need to know your email address");
    // input.simulate('change', { target: { value: '' } });
  });

  it('should say invalid email', () => {
    const wrapper = shallow(<EmailInput value={'myemail'} />);
    expect(wrapper.find('p').text()).toEqual("this is not a valid email address");
    // input.simulate('change', { target: { value: "myemail" } });
  });

  it('should not show an error message', () => {
    const wrapper = shallow(<EmailInput value={'myemail@msn.com'} />);
    expect(wrapper.find('p').length).toEqual(0);
  });
});

describe('<BirthdayInput> component', () => {
  it('should say need birthday', () => {
    const wrapper = shallow(<EmailInput value={' '} />);
    expect(wrapper.find('p').text()).toEqual("we need to know your birthdate");
    // input.simulate('change', { target: { value: '' } });
  });

  it('should say invalid date', () => {
    const wrapper = shallow(<EmailInput value={'what??'} />);
    expect(wrapper.find('p').text()).toEqual("that isn't a valid date");
    // input.simulate('change', { target: { value: '123/23/2019' } });
  });

  it('should say not old enough', () => {
    const wrapper = shallow(<EmailInput value={'05/23/2005'} />);
    expect(wrapper.find('p').text()).toEqual("sorry, you must be at least 13 to sign up");
    // input.simulate('change', { target: { value: '05/23/2005' } });
  });

  it('should not show an error message', () => {
    const wrapper = shallow(<EmailInput value={'05/23/1990'} />);
    expect(wrapper.find('p').length).toEqual(0);
  });
});
