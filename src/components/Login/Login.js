import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputCard from '../common/InputCard';
import { setLoading, msg } from '../../actions/global';
import { getUser } from '../../actions/user';
import Message from '../../utils/Message';
import './Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.loadingState.loading) {
			this.props.setLoading(false);
		}
	}

	onHandle = (user, pw) => {
		if (!user || !pw)
			return this.props.msg(
				new Message('warn', 'Please fill the required fields!')
			);
		return this.props.getUser(user, pw);
	};

	render() {
		return (
			<div className='loginCard'>
				<InputCard onHandle={this.onHandle} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userState: state.user,
	loadingState: state.loading
});

export default connect(mapStateToProps, { setLoading, msg, getUser })(Login);
