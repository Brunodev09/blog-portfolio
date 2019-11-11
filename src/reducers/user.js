import { USER } from '../actions/types';


const initialState = {
    "userId": "",
    "email": "",
    "token": ""
};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER:
            return {
                ...state,
                "userId": action.payload.user._id,
                "userName": action.payload.user.name,
                "email": action.payload.user.email,
                "token": action.payload.user.token
            }      
        default:
            return state;
    }
};