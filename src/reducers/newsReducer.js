import { fromJS } from "immutable";
import {FETCH_NEWS, FETCH_NEWS_FAIL, FETCH_NEWS_SUCCESS} from "../constants/newsConstants";

export const initialState = fromJS({
  newsList: [],
  newsLoading: false,
  newsStatus: false,
  newsMessage: '',
});

export default function newsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return state
        .set('newsList',fromJS([]))
        .set('newsLoading',true)
        .set('newsStatus',false)
        .set('newsMessage','loading...');

    case FETCH_NEWS_SUCCESS:
      return state
        .set('newsList',fromJS(action.newsList))
        .set('newsLoading',false)
        .set('newsStatus', true)
        .set('newsMessage','News list has been successfully retrieved');

    case FETCH_NEWS_FAIL:
      return state
        .set('newsLoading',false)
        .set('newsStatus', false)
        .set('newsMessage','An error occurred while retrieving news list');

    default:
      return state;
  }
}
