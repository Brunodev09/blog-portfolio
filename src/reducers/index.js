import { combineReducers } from 'redux';
import user from './user';
import { connectRouter } from "connected-react-router";

export default history => 
    combineReducers({
        "user": user,
        "router": connectRouter(history)
    });   
