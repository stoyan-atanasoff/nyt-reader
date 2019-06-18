import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsDetailsPage from '../NewsDetailsPage';
import NewsListPage from '../NewsListPage';
import HomePage from "../HomePage";
import NotFoundPage from '../../components/NotFound';
import Header from "../../components/Header";
import './App.css';
import {Col, Row} from "antd";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Row type="flex" justify="center">
          <Col md={16}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/news" component={NewsListPage} />
              <Route exact path="/news/:id" component={NewsDetailsPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
