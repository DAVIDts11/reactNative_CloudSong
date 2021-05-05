
import {ADD_QUERY} from '../actions/lastSongsActions';

const initState = {lastQueriesList: []};

export default function reducer(state = initState, action){
    const {type, payload} = action;
    if(type == ADD_QUERY){
        const lastQueries = [...state.lastQueriesList];
        const {query} = payload;
        lastQueries.unshift(query);
        return {...state , lastQueriesList: lastQueries.slice(0,5)};
    }
 
    else return state;
    
}
