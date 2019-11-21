import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterCard from '../common/RegisterCard';
import { setLoading, msg } from '../../actions/global';
import { createUser } from '../../actions/user';
import Message from '../../utils/Message';
import './Register.css';

class Register extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.loadingState.loading) {
			this.props.setLoading(false);
		}
	}

	onHandle = (...args) => {
		for (let argument of args) {
			if (!argument) {
				return this.props.msg(
					new Message('warn', 'Please fill the required fields!')
				);
			}
		}
		if (args[0].length < 3)
			return this.props.msg(new Message('warn', 'Name is too short!'));
		if (args[0].length >= 20)
			return this.props.msg(new Message('warn', 'Name is too long!'));
		if (args[2] !== args[3])
			return this.props.msg(
				new Message('warn', "Passwords don't match!")
			);
		if (args[2].length < 8)
			return this.props.msg(
				new Message('warn', 'Password is too short!')
			);

		try {
			args[0] = args[0].replace(
				/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi,
				''
			);
		} catch (e) {
			return console.error(e);
		}

		this.props.createUser(args[0], args[1], args[2]);
		this.props.history.push('/');
	};

	render() {
		return (
			<div className='registerCard'>
				<RegisterCard onHandle={this.onHandle} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userState: state.user,
	loadingState: state.loading
});

export default connect(mapStateToProps, { setLoading, msg, createUser })(
	Register
);
