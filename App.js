import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import CameraModule from "./components/CameraModule";
import Success from "./components/Success";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <SafeAreaView className="flex-1">
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                            animation: "slide_from_right",
                            navigationBarColor: "#00B1AC",
                        }}
                    />
                    <Stack.Screen
                        name="CameraModule"
                        component={CameraModule}
                        options={{
                            headerShown: false,
                            animation: "slide_from_right",
                            navigationBarColor: "#00B1AC",
                        }}
                    />
                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{
                            headerShown: false,
                            animation: "slide_from_right",
                            navigationBarColor: "#fff",
                        }}
                    />
                </Stack.Navigator>

                <StatusBar style="auto" />
            </SafeAreaView>
        </NavigationContainer>
    );
}
