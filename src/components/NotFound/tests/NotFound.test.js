import React from 'react';
import NotFound from '../index';
import {render} from "@testing-library/react";

describe('NotFound', () => {
  it('Not Found page should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
        <NotFound />
    );
    expect(firstChild).toMatchSnapshot();
  });
});
