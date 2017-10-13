import { FETCH_WETHER } from '../actions/index';

export default function(state = [], action){
    switch (action.type){
        case FETCH_WETHER:
        return [action.payload.data, ...state];
    }
    return state;
}