import {combineReducers} from "redux";
import  songReducer  from "./songReducer";
import lastSongsReducer from "./lastSongsReducer"

export const  rootReducer = combineReducers({
    song: songReducer,
    lastSongs :lastSongsReducer
});

