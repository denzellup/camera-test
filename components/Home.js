import { Image, Pressable, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
    return (
        <View className="bg-[#00B1AC] items-center justify-center flex-1 p-5">
            <Image
                source={require("../assets/lup-logo.png")}
                resizeMode="contain"
                style={{ width: 180, marginBottom: 10 }}
            />
            <Pressable android_disableSound className="w-full" onPress={() => navigation.navigate("CameraModule")}>
                <View className="bg-[#FCDC41] items-center rounded-lg">
                    <Text className="text-[#2D2926] font-bold text-[16px] p-2">Start</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Home;
