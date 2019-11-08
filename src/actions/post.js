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
    httpUser as http
} from "../utils/http";

import {
    setLoading
} from "./global";

export const getPosts = () => {
    return async (dispatch) => {

        try {
            setLoading(true)(dispatch);
            
            const request = await http.get("/post");
            if (request) {
                dispatch({
                    type: GET_POSTS,
                    payload: JSON.parse(request)
                });
            }
            setLoading(false)(dispatch);
        } catch (e) {
            if (e.message) {
                let err;
                try {
                    err = (JSON.parse(e.error)).error;
                } catch (parseError) {
                    console.log(parseError)
                    err = e.message;
                }
                console.error(`POSTS_ERROR: ${err}`);
                dispatch({
                    type: ERROR,
                    payload: `Error: ${err}`
                });
            }
        }
    }
}