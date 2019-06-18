import React, { memo } from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {Alert, Col, Row, Spin} from "antd";
import {fetchNews} from "../../actions/newsActions";
import {selectNewsList, selectNewsLoading, selectNewsMessage, selectNewsStatus} from "../../selectors/newsSelectors";
import NewsListItem from "../../components/NewsListItem";
import './style.css';
import PropTypes from "prop-types";

class NewsListPage extends React.Component {
  componentDidMount() {
    if (!this.props.newsList.length) {
      this.props.fetchNews();
    }
  }

  render() {
    // Show loading bar
    if (this.props.newsLoading) return <div className='loader'><Spin size='default' /><br />{this.props.newsMessage}</div>;

    // Show error message
    if (!this.props.newsStatus) return <Row type='flex' lign='top' justify='center' className={'news-message'}><Col><Alert message={this.props.newsMessage} type="error" /></Col></Row>;

    // Show news
    let cards = 1;
    return <Row type='flex' lign='top'>
      {this.props.newsList.map(news => <Col xs={24} sm={24} key={news.id}>
          <NewsListItem id={news.id} title={news.title} abstract={news.abstract} section={news.section} byline={news.byline} media={news.media} publishedDate={news.published_date} alt={!(cards++ % 2)}/>
        </Col>
      )}
    </Row>;
  }
}

NewsListPage.propTypes = {
  newsList: PropTypes.array,
  newsLoading: PropTypes.bool,
  newsMessage: PropTypes.string,
  newsStatus: PropTypes.bool,
  fetchNews: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    newsList: selectNewsList(state),
    newsLoading: selectNewsLoading(state),
    newsMessage: selectNewsMessage(state),
    newsStatus: selectNewsStatus(state),
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchNews: () => dispatch(fetchNews())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NewsListPage);
