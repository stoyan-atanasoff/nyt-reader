/**
 * Test the NewsDetailsPage
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'
import { fromJS } from "immutable";
import NewsDetailsPage from '../index';
import { history } from '../../../store/configureStore';

const initialState = {
  news: fromJS({
    newsList: [],
    newsLoading: false,
    newsStatus: false,
    newsMessage: '',
  })
};
const mockStore = configureStore();
let store;

describe('<NewsDetailsPage />', () => {

  beforeAll(() => {
    store = mockStore(initialState)
  });

  it('News details single article view should render and match the snapshot', () => {
    const newsItem = [{
      "url": "https://www.nytimes.com/2018/06/04/us/graduate-quotes-trump-obama.html",
      "adx_keywords": "Commencement Speeches;Bowling, Ben;Trump, Donald J;Obama, Barack;Kentucky;United States Politics and Government",
      "column": null,
      "section": "U.S.",
      "byline": "By LAURA M. HOLSON",
      "type": "Article",
      "title": "Kentucky Crowd Cheers Valedictorian’s Trump Quote, Then Learns Obama Said It",
      "abstract": "A high school valedictorian quoted Trump. The crowd roared. Then: “Just kidding,” he said. “That was Barack Obama.”",
      "published_date": "2018-06-04",
      "source": "The New York Times",
      "id": 100000005935794,
      "asset_id": 100000005935794,
      "views": 1,
      "des_facet": ["COMMENCEMENT SPEECHES"],
      "org_facet": ["UNITED STATES POLITICS AND GOVERNMENT"],
      "per_facet": ["BOWLING, BEN", "TRUMP, DONALD J", "OBAMA, BARACK"],
      "geo_facet": ["KENTUCKY"],
      "media": [{
        "type": "image",
        "subtype": "photo",
        "caption": "Ben Bowling, the valedictorian of Bell County High School.",
        "copyright": "via Facebook",
        "approved_for_syndication": 0,
        "media-metadata": [{
          "url": "https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75
        }, {
          "url": "https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210
        }, {
          "url": "https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-mediumThreeByTwo440.jpg",
          "format": "mediumThreeByTwo440",
          "height": 293,
          "width": 440
        }]
      }],
      "uri": "nyt://article/02160478-cbb7-538d-87fa-a5777305e833"
    }];
    store = mockStore({
      news: fromJS({
        newsList: newsItem,
        newsLoading: true,
        newsStatus: false,
        newsMessage: '',
      })
    });

    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Router history={history}>
          <NewsDetailsPage match={{ params: { id: 100000005935794 } }} />
        </Router>
      </Provider>
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('News single article not found successfully should render correctly', async () => {
    store = mockStore({
      news: fromJS({
        newsList: [],
        newsLoading: false,
        newsStatus: true,
        newsMessage: '',
      })
    });
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Router history={history}>
          <NewsDetailsPage match={{ params: { id: 9999999999 } }} />
        </Router>
      </Provider>
    );

    expect(firstChild).toMatchSnapshot();
  });

});
