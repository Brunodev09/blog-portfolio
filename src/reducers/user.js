import { USER } from '../actions/types';


const initialState = {
    "userName": "",
    "token": "",
    "developer": false
};

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case USER:
            return {
                ...state,
                "userName": action.payload.user,
                "token": action.payload.token,
                "developer": action.payload.developer
            }      
        default:
            return state;
    }
};