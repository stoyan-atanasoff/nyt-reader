import React from 'react';
import './style.css';

const HomePage = () => {
  return <div className='homepage-body'>
    <span className='homepage-greeting'>Hello Everyone!</span><br/>
    This is a sample reader client of New York Times top articles! <br/>
    Don't forget to set your own api key.<br/>
    <br/>
    This application s built with:
    <ul>
      <li>React (16.8.6)</li>
      <li>Redux (4.0.1)</li>
      <li>React-router (5.0.1)</li>
      <li>Saga (1.0.3)</li>
      <li>Antd (3.19.4)</li>
    </ul>
  </div>;
}

export default HomePage;
