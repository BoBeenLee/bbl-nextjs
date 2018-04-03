import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './';

describe('avatar', () => {
  it('renders Avatar', () => {
    // expect(1).toBe(1);
    const wrapper = shallow(<Avatar />);
    // expect(wrapper.find("img")).toHaveLength(1);
  });
});
