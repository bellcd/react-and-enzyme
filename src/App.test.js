import { mount } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  const setup = (props = {}) => {
    const wrapper = mount(<App {...props}/>);
    const instance = wrapper.instance();
    return { wrapper, instance };
  };
  describe('handleInputChange', () => {
    const todo = 'food shopping';
    it('changes the value of the input field', () => {
      const { wrapper, instance } = setup();
      const input = wrapper.find('input').getDOMNode();
      expect(input.value).toBe('default');
      console.log('input.value: ', input.value);
      console.log('wrapper.debug(): ', wrapper.debug());
      instance.handleInputChange({ target: { value: todo }});
      wrapper.update();
      expect(input.value).toBe(todo);
      console.log('wrapper.debug(): ', wrapper.debug());
      console.log('input.value: ', input.value);
    });
  });
});