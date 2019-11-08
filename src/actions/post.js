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
import {
    httpClient as http
} from "../utils/http";

export const getPosts = () => {
    return async (dispatch) => {

        try {
            setLoading(true);

            
            dispatch({
                type: GET_POSTS,
                payload: {}
            });
        } catch (e) {
            if (e.message) {
                dispatch({
                    type: ERROR,
                    payload: e.message || e
                });
            }
        }
    }
}

export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}