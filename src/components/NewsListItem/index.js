import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCalendar, faUser, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import getBigThumbnail from '../../helpers/getBigThumbnail';
import './style.scss';
library.add(faCalendar, faUser);

const NewsListItem = ({ id, title, abstract, section, byline, media, publishedDate, alt }) => {
  const newsImage = getBigThumbnail(media);
  return <div className={`blog-card ${(alt) ? 'alt' : ''}`}>
    <div className="meta">
      <div className="photo" style={{backgroundImage: `url(${newsImage})`}} />
      <ul className="details">
        <li className="author"><FontAwesomeIcon icon={faUser} /> {(byline.length) ? byline : 'unknown'}</li>
        <li className="date"><FontAwesomeIcon icon={faCalendar} /> {publishedDate}</li>
      </ul>
    </div>
    <div className="description">
      <h1>{title}</h1>
      <h2>{section}</h2>
      <p>{abstract}</p>
      <p className="read-more">
        <Link to={`/news/${id}`}>Read More <FontAwesomeIcon icon={faArrowRight} /></Link>
      </p>
    </div>
  </div>;
}

NewsListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  abstract: PropTypes.string,
  section: PropTypes.string,
  byline: PropTypes.string,
  media: PropTypes.array,
  publishedDate: PropTypes.string,
  alt: PropTypes.bool,
}

export default NewsListItem;
