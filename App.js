import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./Store/store";
import MyApp from "./components/MyApp"


export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store} >
        <MyApp style={styles.myapp}>
        </MyApp>
      </Provider>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0

  },

});
