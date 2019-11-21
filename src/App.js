import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/common/Header";
import Loader from "./components/common/Loader";
import Post from "./components/Post/Post";
import New from "./components/New/New";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Detail from "./components/Detail/Detail";

require('dotenv').config()

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
    this.state = {
      user: null,
      search: ""
    }

  }

  componentWillReceiveProps(next) {
    let { userState } = next;
    if (userState && userState.token && (!this.props.userState || !this.props.userState.token)) {
      this.props.history.push("/");
      return this.setState({ user: userState.user });
    }

  }

  onClickNav = (destination) => {
    let { history } = this.props;
    history.push(destination);
  };

  search = (char) => {
    this.setState({ search: char });
  };

  componentDidMount() {
  }


  render() {
    return (
      <Router history={this.props.history}>
        <div className="customHeader">
          <Header search={this.search} user={this.state.user} onClickNav={this.onClickNav} />
        </div>
        <Loader />
        <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />

        <Switch>
          <Route render={() => (<Redirect to={{ pathname: "/posts" }} />)} exact path="/" />
          <Route render={() => (<Post history={this.props.history} search={this.state.search} />)} exact path="/posts" />
          <Route component={Detail} exact path="/posts/:id" />
          <Route component={Login} exact path="/login" />
          <Route component={New} exact path="/new" />
          <Route component={Register} exact path="/register" />
          <Route component={Logout} exact path="/logout" />
        </Switch>
      </Router>

    );
  }
}

const mapStateToProps = state => ({
  userState: state.user,
  loadingState: state.loading
});

export default connect(mapStateToProps, {})(App);

