import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import {Col, Row} from "antd";
import {faArrowLeft, faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import getBigThumbnail from '../../helpers/getBigThumbnail';
import './style.css';
library.add(faArrowLeft, faCalendar, faUser);

const NewsItemDetails = ({title, media, abstract, publishedDate, byline}) => {
  const image = getBigThumbnail(media);
  return <div className={'news-details-page'}>
    <Row>
      <Col xs={24} md={24}>
        <h1 className='news-details-title'>{title}</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={8} md={8} lg={6} xl={5} xxl={4}>
        <img src={image} alt={title} width={150} align='center' className={'news-details-image'}/>
      </Col>
      <Col xs={24} sm={116} md={16} lg={18} xl={19} xxl={20}>
        <p className='news-details-body'>
          {abstract}
        </p>
        <div><FontAwesomeIcon icon={faCalendar}/> {publishedDate} <br/> <FontAwesomeIcon icon={faUser}/> {(!byline.length) ? 'unknown author' : byline}</div>
      </Col>
    </Row>
    <Row>
      <Col xs={24} md={24}>
        <Link to={'/news'} className='news-details-back'><FontAwesomeIcon icon={faArrowLeft}/> Back to all news</Link>
      </Col>
    </Row>
  </div>;
}

NewsItemDetails.propTypes = {
  title: PropTypes.string,
  media: PropTypes.array,
  abstract: PropTypes.string,
  publishedDate: PropTypes.string,
  byline: PropTypes.string,
}

export default NewsItemDetails;
