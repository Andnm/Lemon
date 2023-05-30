import * as React from "react";
import { View, Text, Image } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "#fec89a", alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
        <Image
          source={{ uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/02/lemons.jpg?quality=82&strip=1" }}
          style={{ width: 60, height: 60, margin: 20}}
        />
        <Text
          style={{
            fontSize: 30,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Little Lemon
        </Text>
    </View>
  );
}
