import React, { Component } from 'react';
import { connect } from "react-redux";


class Logout extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (this.props && this.props.userState && this.props.userState.token) window.location.reload();
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({
    userState: state.user,
    loadingState: state.loading
});

export default connect(mapStateToProps, {  })(Logout);


