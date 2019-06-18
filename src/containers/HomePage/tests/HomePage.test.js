import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import HomePage from '../index';
configure({adapter: new Adapter()});

describe('HomePage', () => {
  it('should render correctly', () => {
    const component = shallow(<HomePage />);

    expect(component).toMatchSnapshot();
  });
});
