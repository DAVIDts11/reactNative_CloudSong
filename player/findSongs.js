import axios from 'axios';


const findSongs = async (query) => {

    const client_id = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE';
    const client = axios.create({
        baseURL: 'https://api.soundcloud.com',
        params: {
            client_id: client_id
        }
    })

    const tracks = (await client.get('/tracks', { params: { q: query } })).data;
    tracks.forEach(t => {
        t.stream_url += `?client_id=${client_id}`
    })
    
    return tracks;


}

export default findSongs;




