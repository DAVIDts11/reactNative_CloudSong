import React, { useState } from 'react';
import {TextInput , StyleSheet, Alert, Text, View, Button, ActivityIndicator, FlatList, ImageBackground } from 'react-native';
import Song from "./Song";
import findSongs from "../player/findSongs";
import { PlayTrack } from "../player/play";
import { useDispatch, useSelector } from "react-redux";
import { ADD_QUERY_ACTIONS } from "../Store/actions/lastSongsActions"

const MyApp = () => {
    PlayTrack();
    const [page, setCurrentPage] = useState("search");
    const [searchVal, setsearchVal] = useState("");
    const [ready, steReady] = useState(false);
    const [findingSongs, setfindingSongs] = useState([]);
    const { lastQueriesList } = useSelector(state => state.lastSongs);
    const dispatch = useDispatch();

    function changePage() {
        if (page == "search") {
            setCurrentPage("lastQuerys");
        }
        else setCurrentPage("search")
    }

    async function search() {
        try {
            steReady(true);
            setfindingSongs([]);
            const songs = await findSongs(searchVal);
            setfindingSongs(songs);
            dispatch(ADD_QUERY_ACTIONS.addQuery(searchVal));
        } catch (e) {
            Alert.alert('Error', 'cCan not find songs');
        } finally {
            steReady(false);
        }
    }




    if (page == "search")
        return (
            <View style={styles.contener}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.textInput} value={searchVal} onChangeText={setsearchVal} />
                    <Button title="Search" onPress={search} />
                </View>
                    <FlatList style={styles.flatListsongs}
                        ListEmptyComponent={ready ? <ActivityIndicator size="large" color="blue" /> : <Text>No Results</Text>}
                        data={findingSongs}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Song song={item} />} />
                <View>
                    <Button title="to last queries" onPress={changePage}> </Button>
                </View>
            </View >
        )




    else {
        return (
            <View style={styles.contener}>
                <Text style={styles.headerPage2}> Latest song queries are :</Text>
                <FlatList data={lastQueriesList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item,index }) => <Text style={styles.recentQueriws} >{index+1}. {item}</Text>} />
                <View >
                    <Button title="to search page" onPress={changePage}> </Button>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    searchBox: {
        flexDirection: "row"
    },
    textInput: {
        width: "70%",
        height: 50,
        borderWidth: 3,
        fontSize: 35
    },
    flatListsongs: {
        flex: 1
    },
    recentQueriws: {
        color: "green",
        fontSize: 37
    },
    headerPage2:{
        color:"red",
        fontSize:25,
        marginTop:15,
        marginBottom:20
    }
})

export default MyApp;
