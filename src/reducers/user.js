import { USER } from '../actions/types';


const initialState = {
    "userId": ""
};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER:
            return {
                ...state,
                "userId": action.payload._id,
            }   
        default:
            return state;
    }
};