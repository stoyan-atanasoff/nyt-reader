import React from 'react';
import {render, fireEvent } from "@testing-library/react";
import {Provider} from "react-redux";
import {history} from "../../../store/configureStore";
import {ConnectedRouter} from "connected-react-router";
import App from "../../../containers/App";

import configureStoreOrig from '../../../store/configureStore';
let store = configureStoreOrig();

describe('Header', () => {

  it('Header should render and match the snapshot', async () => {
    const {
      container
    } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should open drawer menu', () => {
    const openDrawerButton = document.body.querySelector('button.bars-menu');
    fireEvent.click(openDrawerButton);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('Should close drawer menu', async () => {
    const closeDrawerButton = document.body.querySelector('button.ant-drawer-close');
    fireEvent.click(closeDrawerButton);
    expect(document.body.innerHTML).toMatchSnapshot();
  })

  it('Should drawer link works', async () => {
    const drawerLink = document.body.querySelector('a.drawer-link ');
    fireEvent.click(drawerLink);
    expect(document.body.innerHTML).toMatchSnapshot();
  })
});
