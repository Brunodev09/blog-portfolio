import {
	USER,
	GET_POST,
	GET_POSTS,
	CREATE_POST,
	EDIT_POST,
	DELETE_POST,
	ERROR,
	SET_LOADING,
	MESSAGE
} from './types';
import { httpUser as http } from '../utils/http';

import { setLoading, msg } from './global';
import Message from '../utils/Message';

// @TODO - Add a custom token to be able to request to my API
// @TODO - Correct parsing of request erros on Login

export const getPosts = () => {
	return async dispatch => {
		try {
			setLoading(true)(dispatch);

			const request = await http.get('/post');
			if (request) {
				dispatch({
					type: GET_POSTS,
					payload: request
				});
			}
			setLoading(false)(dispatch);
		} catch (e) {
			if (e.message) {
				let err;
				try {
					err = JSON.parse(e.error).error;
				} catch (parseError) {
					console.log(parseError);
					err = e.message;
				}
				console.error(`POSTS_ERROR: ${err}`);
				dispatch({
					type: ERROR,
					payload: `Error: ${err}`
				});
			}
		}
	};
};

export const createPost = data => {
	return async dispatch => {
		try {
			setLoading(true)(dispatch);
			const request = await http.post('/post', data);
			if (request) {
				dispatch({
					type: CREATE_POST,
					payload: request
				});
				msg(new Message('ok', 'Post created successfully!'));
			}
			setLoading(false)(dispatch);
		} catch (e) {
			setLoading(false)(dispatch);
			if (e.message) {
				let err;
				try {
					err = JSON.parse(e.error).error;
				} catch (parseError) {
					console.log(parseError);
					err = e.message;
				}
				console.error(`POSTS_ERROR: ${err}`);
				dispatch({
					type: ERROR,
					payload: `Error: ${err}`
				});
			}
		}
	};
};
