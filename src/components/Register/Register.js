import React, { Component } from 'react';
import { connect } from "react-redux";

import RegisterCard from "../common/RegisterCard";
import { setLoading } from "../../actions/global";
import "./Register.css";

class Register extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (this.props.loadingState.loading) {
            this.props.setLoading(false);
        }
    }

    render() {
        return (
            <div className="registerCard">
                <RegisterCard />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userState: state.user,
    loadingState: state.loading
});

export default connect(mapStateToProps, { setLoading })(Register);


