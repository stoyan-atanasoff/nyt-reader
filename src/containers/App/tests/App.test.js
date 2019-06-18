import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from '../index';
configure({adapter: new Adapter()});

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
