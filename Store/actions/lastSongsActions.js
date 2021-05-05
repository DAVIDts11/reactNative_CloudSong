export const ADD_QUERY = 'ADD_QUERY';

const addQuery = query => ({
    type: ADD_QUERY,
    payload: { query }
});

export const ADD_QUERY_ACTIONS = {addQuery} ;