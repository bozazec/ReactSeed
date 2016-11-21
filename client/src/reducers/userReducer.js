import * as types from '../actions/actionTypes';

export default function userReducer( state = [], action) {
    switch(action.type) {
        case types.BILO_STA: {
            return [
                ...state,
                actin.data
            ]
        }
        default: {
            return state;
        }
    }
}