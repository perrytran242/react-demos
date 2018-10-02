import types from '../actions/types';

const DEFAULT_STATE = {
    userName: 'Guest',
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.LOGIN:
            return {...state, username: action.username};
        default: 
            return state;
    }
};