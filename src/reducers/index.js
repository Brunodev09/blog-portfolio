import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";

import user from './user';
import popup from "./popup";
import loading from "./loading";
import post from "./post";

export default history => 
    combineReducers({
        "user": user,
        "post": post,
        "popup": popup,
        "loading": loading,
        "router": connectRouter(history)
    });   
