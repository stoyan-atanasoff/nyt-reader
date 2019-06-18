
import newsReducer from '../newsReducer';
import {fetchNews, fetchNewsFail, fetchNewsSuccess} from '../../actions/newsActions';
import {fromJS} from "immutable";

/* eslint-disable default-case, no-param-reassign */
describe('newsReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      newsList: [],
      newsLoading: false,
      newsStatus: false,
      newsMessage: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(newsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the successfully fetched news action correctly', () => {
    const response = [{
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
    const expectedResult = fromJS({
      newsList: response,
      newsLoading: false,
      newsStatus: true,
      newsMessage: "News list has been successfully retrieved",
    });

  expect(newsReducer(state, fetchNewsSuccess(response))).toEqual(expectedResult);
  });

  it('should handle the failed fetched news action correctly', () => {
    const expectedResult = fromJS({
      newsList: [],
      newsLoading: false,
      newsStatus: false,
      newsMessage: "An error occurred while retrieving news list",
    });

  expect(newsReducer(state, fetchNewsFail('Error'))).toEqual(expectedResult);
  });

  it('should handle the loading of news', () => {
    const expectedResult = fromJS({
      newsList: [],
      newsLoading: true,
      newsStatus: false,
      newsMessage: "loading...",
    });

  expect(newsReducer(state, fetchNews())).toEqual(expectedResult);
  });
});
