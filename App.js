import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    // backgroundColor:"yellow"
  },
});
