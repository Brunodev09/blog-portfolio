import {
    ERROR,
    MESSAGE
} from '../actions/types';
import {
    toast
} from "react-toastify";

const initialState = {
    "lastMessage": "",
    "lastError": ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE: {
            
            let { type, message } = action.payload;
            toast[type](message);
            return {
                ...state,
                "userId": message,
            }
        }
        case ERROR:
                toast.error(action.payload);
            return {
                ...state,
                "lastError": action.payload,
            }
            default:
                return state;
    }
};