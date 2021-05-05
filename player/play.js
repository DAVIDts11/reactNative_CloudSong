import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { useSelector } from 'react-redux';


export function PlayTrack() {
    const [track, setTrack] = useState(null);
    const { currentTrack } = useSelector(state => state.song);

    useEffect(() => {
        const switchSong = async () => {
            if (track) {
                await track.stopAsync();
            }
            
            if (currentTrack) {
                const {sound: newSong} = await Audio.Sound.createAsync({ uri: currentTrack.stream_url });
                await newSong.playAsync();
                setTrack(newSong);
            }
        }
        switchSong();
    }, [currentTrack])

}