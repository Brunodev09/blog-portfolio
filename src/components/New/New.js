import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostCard from '../common/PostCard';
import { setLoading, msg } from '../../actions/global';
import { createPost } from '../../actions/post';
import './New.css';

class New extends Component {
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
			<div className='newCard'>
				<PostCard
					createPost={this.props.createPost}
					showAlert={this.props.msg}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userState: state.user,
	loadingState: state.loading
});

export default connect(mapStateToProps, { setLoading, msg, createPost })(New);
