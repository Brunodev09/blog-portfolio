import React, { Component } from 'react';
import { connect } from "react-redux";

import DetailCard from "../common/DetailCard";
import { setLoading, msg } from "../../actions/global";
import { createUser } from "../../actions/user";
import "./Detail.css";

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            post: null
        };
    }


    componentDidMount() {
        if (this.props.loadingState.loading) {
            this.props.setLoading(false);
        }
        let id = this.props.history.location.pathname.split("/")[2];
        let { posts } = this.props.postState;
        if (id && posts && posts.length) {
            const find = posts.find(post => post._id + "" === id);
            if (find) this.setState({post: find});
        }

    }

    render() {
        return (
            <div className="registerCard">
                <DetailCard user={this.props.userState} post={this.state.post} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userState: state.user,
    loadingState: state.loading,
    postState: state.post
});

export default connect(mapStateToProps, { setLoading, msg, createUser })(Detail);


