import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavigationLink from '../NavigationLink';
import { Drawer, Button, Col, Row } from 'antd';
import links from './links';
import './style.css';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        <Row>
          <div className='nav-bar'>
            <Col xs={0} md={24}>
              {links.map((link) =>
                <NavigationLink
                  key={link.text}
                  to={link.url}
                  className={`header-link ${(pathname === link.url) ? 'selected' : ''}`}
                >
                  {link.text}
                </NavigationLink>
              )}
            </Col>
            <Col xs={24} md={0}>
              <Button shape="round" icon="menu" size='large' className="bars-menu" type="primary" onClick={this.showDrawer} />
            </Col>
          </div>
        </Row>
        <Drawer title="Navigation" placement="right" closable={true} onClose={this.onClose} visible={this.state.visible}>
          {links.map((link) =>
            <NavigationLink
              onClick={() => this.onClose()}
              to={link.url}
              key={link.text}
              className={`drawer-link ${(pathname === link.url) ? 'selected' : ''}`}
            >
                {link.text}
            </NavigationLink>
          )}
        </Drawer>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default withRouter(Header);
