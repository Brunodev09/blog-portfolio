import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';
import { toast } from 'react-toastify';
import { getPosts } from '../../actions/post';
import { msg } from '../../actions/global';
import Message from '../../utils/Message';

import './Post.css';

// @TODO - Fix the merging of arrays in the search with a id mapping

class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: props.postState.posts
		};
		this.searchState = '';
	}

	componentWillReceiveProps(next) {
		let {
			postState: { posts },
			search
		} = next;
		this.setState({ posts });

		if (this.searchState !== search) {
			let filterCategory = this.state.posts.filter(p =>
				(p.category || '').includes(this.props.search)
			);
			let filterTitle = this.state.posts.filter(p =>
				(p.title || '').includes(this.props.search)
			);
			let aux = { ...this.state };
			aux.posts = [...filterTitle, ...filterCategory];
			this.setState({ posts: aux.posts });
		}
	}

	componentDidMount() {
		if (
			!this.props.postState ||
			!this.props.postState.posts ||
			!this.props.postState.posts.length ||
			(this.props.user && !this.props.user.developer)
		)
			this.props.getPosts();
	}

	showPost = post => {
		if (post._id) {
			return this.props.history.push(`/posts/${post._id}`);
		}
		return msg(new Message('warn', 'Please fill the required fields!'));
	};

	render() {
		return (
			<div>
				{this.state.posts instanceof Array &&
				this.state.posts.length > 0 ? (
					<div className='gridSystem'>
						{this.state.posts.map(post => {
							return (
								<div
									onClick={() => this.showPost(post)}
									className='card'>
									<Card post={post} />
								</div>
							);
						})}
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userState: state.user,
	postState: state.post
});

export default connect(mapStateToProps, { getPosts, msg })(Post);
