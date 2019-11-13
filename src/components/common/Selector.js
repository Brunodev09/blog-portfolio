import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Selector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: ''
		};
	}

	handleChange = event => {
		this.setState({ category: event.target.value });
	};

	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<FormControl style={{width: "50%"}}>
					<InputLabel id='demo-simple-select-label'>
						{this.props.label}
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={this.state.category}
						onChange={this.handleChange}>
						{this.props.opts.map(item => (
							<MenuItem value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userState: state.user,
	loadingState: state.loading
});

export default connect(mapStateToProps, {})(Selector);
