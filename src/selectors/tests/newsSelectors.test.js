import {
  selectNewsState,
  selectNewsList,
  selectNewsLoading,
  selectNewsMessage,
  selectNewsStatus,
  selectNewsItem
} from '../newsSelectors';
import {fromJS} from "immutable";

describe('selectNewsState', () => {
  it('should select the news state', () => {
    const newsState = fromJS({
      userData: {},
    });
    const mockedState = {
      news: newsState,
    };
    expect(selectNewsState(mockedState).toJS()).toEqual(newsState.toJS());
  });
});

describe('selectNewsList', () => {
  it('should select the list of news ', () => {
    const newsList = [];
    const mockedState = {
      news: fromJS({
        newsList,
      }),
    };
    expect(selectNewsList(mockedState)).toEqual(newsList);
  });
});

describe('selectNewsLoading', () => {
  it('should select the loading indicator of news ', () => {
    const newsLoading = false;
    const mockedState = {
      news: fromJS({
        newsLoading,
      }),
    };
    expect(selectNewsLoading(mockedState)).toEqual(newsLoading);
  });
});

describe('selectNewsMessage', () => {
  it('should select the message of news ', () => {
    const newsMessage = 'Some test message for news';
    const mockedState = {
      news: fromJS({
        newsMessage,
      }),
    };
    expect(selectNewsMessage(mockedState)).toEqual(newsMessage);
  });
});

describe('selectNewsStatus', () => {
  it('should select the status of news ', () => {
    const newsStatus = true;
    const mockedState = {
      news: fromJS({
        newsStatus,
      }),
    };
    expect(selectNewsStatus(mockedState)).toEqual(newsStatus);
  });
});

describe('selectNewsStatus', () => {
  it('should select the status of news ', () => {
    const newsItem = {
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
    };
    const newsList = [
      newsItem
    ];

    const mockedState = {
      news: fromJS({
        newsList,
      }),
    };
    expect(selectNewsItem(mockedState, 100000005935794)).toEqual(newsItem);
  });
});
