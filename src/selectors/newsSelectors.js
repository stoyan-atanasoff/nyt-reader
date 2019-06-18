export const selectNewsState = state => state.news;

export const selectNewsList = state => selectNewsState(state).get('newsList').toJS();
export const selectNewsLoading = state => selectNewsState(state).get('newsLoading');
export const selectNewsMessage = state => selectNewsState(state).get('newsMessage');
export const selectNewsStatus = state => selectNewsState(state).get('newsStatus');
export const selectNewsItem = (state, newsId) => selectNewsState(state).get('newsList').toJS().find(news => news.id === parseInt(newsId,10));
