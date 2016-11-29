import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmailInput from './TeamSignUp';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

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