import React from "react";
import { ScrollView, Image, StyleSheet, Text } from "react-native";

export default function Welcome () {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require("../assets/Picture1.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../assets/Picture2.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../assets/Picture3.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../assets/Picture4.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#e5383b",
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
