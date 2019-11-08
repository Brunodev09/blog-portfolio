import {
    SET_LOADING,
    MESSAGE
} from './types';

export const setLoading = (bool) => {
    return dispatch => {
        return dispatch({
            type: SET_LOADING,
            payload: bool
        })
    }
}

export const msg = (messageObj) => {
    return dispatch => {
        if (messageObj.message && messageObj.type) {
            return dispatch({
                type: MESSAGE,
                payload: messageObj
            });
        }
    }
} 