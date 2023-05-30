import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItem from "./components/MenuItem";
import LoginScreen from "./components/LoginScreen";
import Welcome from "./components/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <View style={{ backgroundColor: "white", height: 30 }} />
        <LittleLemonHeader />
        {/* <MenuItem /> */}
        {/* <WelcomeScreen/> */}
        {/* <LoginScreen/> */}
        {/* <Welcome/> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen name="Menu" component={MenuItem} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>

      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
