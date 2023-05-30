import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

export default function LoginScreen({navigation}) {
  const [firstName, onChangeFirstName] = useState("");
  const [passWord, onChangePassWord] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
        <Image
          source={require("../assets/lemon_logo.png")}
          style={{ width: 60, height: 60, margin: 20 }}
        />
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>Login to continue</Text>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={"FirstName"}
      ></TextInput>

      <TextInput
        style={styles.inputBox}
        value={passWord}
        onChangeText={onChangePassWord}
        placeholder={"Password"}
        secureTextEntry
      ></TextInput>

      <Pressable style={styles.btnLogin} onPress={() => navigation.navigate('WelcomeScreen')}>
        <Text style={styles.textBtn}>Log in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "coloumn",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#e5383b",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "black",
    width: "150px",
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
