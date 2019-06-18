import { FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL } from "../constants/newsConstants";

export const fetchNews = () => {
  return {
    type: FETCH_NEWS,
  }
};

export const fetchNewsSuccess = ( newsList ) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    newsList
  }
};

export const fetchNewsFail = ( err ) => {
  return {
    type: FETCH_NEWS_FAIL,
    err,
  }
};
