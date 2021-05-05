export const SET_TRACK = "SET_TRACK";

const setTrack = track => ({
    type: SET_TRACK,
    payload: { track }
});

export const SONG_ACTION = { setTrack };



