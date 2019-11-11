import {
    USER,
    ERROR
} from './types';
import {
    httpUser as http
} from '../utils/http';

export const getUser = (email, password) => {
    return async dispatch => {
        if (email && password) {
            try {
                let req = await http.post("/login", {email, password});

                if (req && req.user && req.token) {
                    return dispatch({
                        type: USER,
                        payload: req
                    });
                }
                throw new Error("User and/or token not returned from request!");

            } catch (e) {
                if (e.message) {
                    let err;
                    try {
                        err = (JSON.parse(e.error)).error;
                    } catch (parseError) {
                        console.log(parseError)
                        err = e.message;
                    }
                    console.error(`USER_ERROR: ${err}`);
                    dispatch({
                        type: ERROR,
                        payload: `Error: ${err}`
                    });
                }
            }
        }
    }
}