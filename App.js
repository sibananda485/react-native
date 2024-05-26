import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Camera from "react-native-vector-icons/Feather";
import Menu from "react-native-vector-icons/Entypo";
import Search from "react-native-vector-icons/Fontisto";
import Chat from "./Chat";

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.menu}>
          <Text style={[styles.text, { fontSize: 26, fontWeight: "500" }]}>
            WhatsApp
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <Icon color="white" name="qr-code-scanner" size={26} />
            <Camera color="white" name="camera" size={26} />
            <Menu color="white" name="dots-three-vertical" size={22} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 25,
          }}
        >
          <TextInput
            placeholderTextColor="#8998a2"
            placeholder="Search..."
            style={{
              backgroundColor: "#253640",
              color: "white",
              margin: 10,
              borderRadius: 20,
              padding: 7,
              paddingLeft: 50,
              flex: 1,
            }}
          />
          <Search
            color="#8998a2"
            name="search"
            size={20}
            style={{ position: "absolute", left: 25 }}
          />
        </View>

        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"Frontend & Backend D..."}
          message={"You: @~Jarvis Create Invoice k..."}
          time={"6:47 PM"}
        />
        <Chat
          heading={"Tatya.inc"}
          message={"Bhushan: Sticker"}
          tick={false}
          time={"11:15 PM"}
        />
        <Chat
          heading={"Mihir"}
          message={"Nahi bharega kya"}
          time={"11:03 PM"}
        />
        <Chat
          heading={"Shrikant Gouda"}
          message={"Call cut ho gaya kya"}
          time={"9:38 PM"}
        />
        <Chat
          heading={"SYBCA KKSU @SCMS 20..."}
          message={"~Nirmiti: SY-KK-A 21/5/2024 11:..."}
          tick={false}
          time={"Yesterday"}
        />
        <Chat
          heading={"D Company 👻"}
          message={"~Ashish: Sticker"}
          tick={false}
          time={"Yesterday"}
        />
        <Chat
          heading={"Devs"}
          message={"You: Ok then we have a alterna..."}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <Chat
          heading={"React Portal"}
          message={"Hii everyone"}
          time={"Yesterday"}
        />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

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
