import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tick from "react-native-vector-icons/Ionicons";

const Chat = ({heading,message,time,tick=true}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 15,
        gap: 15,
        marginBottom: 30,
      }}
    >
      <View
        style={{
          backgroundColor: "#8998a2",
          height: 50,
          width: 50,
          borderRadius: 100,
        }}
      ></View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            // backgroundColor:"red",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.text, { fontSize: 18 }]}>{heading}</Text>
          <Text style={[styles.text, { color: "#8998a2" }]}>{time}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {tick&&<Tick color="#8998a2" name="checkmark-done" size={20} />}
          <Text style={{ color: "#8998a2" }}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#08141b",
  },
  scroll: {
    backgroundColor: "#08141b",
  },
  text: {
    color: "white",
  },
  menu: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  placeholder: {},
});
