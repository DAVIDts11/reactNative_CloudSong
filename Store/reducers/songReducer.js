import {SET_TRACK} from '../actions/songAction';


const initState = {currentTrack: null};


export default function reducer(state = initState, action){
    if (action.type == SET_TRACK ) {
        return {currentTrack: action.payload.track}
    }
    else return state;

}