import React from 'react';
import NavigationLink from '../index';
import { Router } from 'react-router-dom';
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {history} from "../../../store/configureStore";
import configureStore from "redux-mock-store";

const initialState = {};
const mockStore = configureStore();

describe('NavigationLink', () => {
  it('Navigation link should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <NavigationLink to={'/'}/>
        </Router>
      </Provider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});
