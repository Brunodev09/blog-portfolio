import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import Post from './components/Post/Post';
import Header from "./components/common/Header";
import Container from "./components/common/Container";

import Login from "./components/Login/Login";
import { Router, Switch, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isLogged, ...args }) => (
  <Route
      {...args}
      render={props =>
          isLogged ? (
              <Component {...props} />
          ) : (
                  <Redirect
                      to={{
                          pathname: "/login"
                      }}
                  />
              )
      }
  />
);


class App extends Component {

  constructor(props) {
    super(props);
  }

  onClickNav = (destination) => {
    let { history } = this.props;
    history.push(destination);
  };


  render() {
    return (
      <Router history={this.props.history}>

        <Header onClickNav={this.onClickNav} />

        <Switch>
            <Route component={Post} exact path="/"/>
            <Route component={Login} exact path="/login"/>
        </Switch>
        <div className="App">
          
      </div>
      </Router>
      
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {  })(App);

