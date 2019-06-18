import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavigationLink = (props) => <Link {...props}>{props.children}</Link>;
export default NavigationLink;
