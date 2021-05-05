import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SONG_ACTION } from '../Store/actions/songAction';

const Song = (props) => {

    const dispatch = useDispatch();

    const play = () => dispatch(SONG_ACTION.setTrack(props.song));

    return (
        <TouchableOpacity onPress={play}>
            <View style={styles.contener}>
                {props.song.artwork_url && <Image source={{ uri: props.song.artwork_url }} style={styles.imageSize} />}
                <View>
                    <Text>{props.song.title}</Text>
                    <Text>{props.song.playback_count} Plays</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    contener: {
        backgroundColor: "honeydew",
        borderWidth: 2.5,
        borderColor: "gray",
        padding: 10,
        flexDirection: 'row-reverse',
        width: "95%",
        marginTop: 10,
        fontFamily:"tahoma"
    },
    imageSize: {
        width: 50,
        height: 50
    }
})


export default Song;
