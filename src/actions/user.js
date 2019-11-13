import {
    USER,
    ERROR
} from './types';
import {
    httpUser as http
} from '../utils/http';

import { msg } from "./global";

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
        else msg({type: "warning", message: "Please fill the required fields!"})(dispatch);
    }
}

export const createUser = (name, email, password) => {
    return async dispatch => {
        if (name && email && password) {
            try {
                let req = await http.post("/user", {name, email, password});

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
                    console.error(`USER_CREATE_ERROR: ${err}`);
                    dispatch({
                        type: ERROR,
                        payload: `Error: ${err}`
                    });
                }
            }
        }
        else msg({type: "warning", message: "Please fill the required fields!"})(dispatch);
    }
}

export const showUser = (token) => {
    return async dispatch => {
        if (token) {
            try {
                let req = await http.get("/login", {"x-auth-token": token});

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
        else msg({type: "warning", message: "Please fill the required fields!"})(dispatch);
    }
}