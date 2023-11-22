import { Pressable, Text, View } from 'react-native';
import React from 'react';

const Success = ({ navigation, route }) => {
  const { data, type } = route.params;
  return (
    <View className="flex-1">
      <View className="bg-[#00B1AC] p-5 w-full items-center justify-center">
        <Text className="mb-8 text-white font-bold text-4xl pt-12">
          Success! 🎉
        </Text>
      </View>
      <View className="flex-1 p-5">
        <Text className="mb-1 text-[#2D2926] text-xl mt-10">Type:</Text>
        <Text className="text-[#2D2926] font-bold text-2xl">{type}</Text>
        <Text className="mb-1 text-[#2D2926] text-xl mt-10">Data scanned:</Text>
        <Text className="text-[#2D2926] font-bold text-2xl">{data}</Text>
      </View>
      <View className="p-5 mb-5">
        <Pressable
          android_disableSound
          className="w-full"
          onPress={() => navigation.navigate('Home')}
        >
          <View className="bg-[#FCDC41] items-center rounded-lg">
            <Text className="text-[#2D2926] font-bold text-[16px] p-2">
              Back to Home
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Success;
