import React from 'react';
import PropTypes from "prop-types";
import {selectNewsItem} from "../../selectors/newsSelectors";
import NewsItemDetails from '../../components/NewsItemDetails';
import {connect} from "react-redux";
import {compose} from "redux";

const NewsDetailsPage = (props) => {
  const { id } = props.match.params;
  const newsItem = props.getNewsItem(id);
  if (typeof newsItem === 'undefined') return <div/>;
  const {
    title,
    abstract,
    byline,
    published_date,
    media
  } = newsItem;

  return <NewsItemDetails
    title={title}
    abstract={abstract}
    byline={byline}
    publishedDate={published_date}
    media={media}
  />
}

NewsDetailsPage.propTypes = {
  match: PropTypes.object,
  getNewsItem: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    getNewsItem: (newsId) => selectNewsItem(state, newsId)
  };
};

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect
)(NewsDetailsPage);
