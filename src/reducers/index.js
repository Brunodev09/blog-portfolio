import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";

import user from './user';
import popup from "./popup";

export default history => 
    combineReducers({
        "user": user,
        "popup": popup,
        "router": connectRouter(history)
    });   
