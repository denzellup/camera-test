import { Pressable, View, Image, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';

const CameraModule = ({ navigation, navigation: { goBack } }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate('Success', { data, type });
  };

  if (hasPermission === false) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="flex-1 items-center justify-center">
        {openCamera ? (
          <View className="w-full aspect-square h-full">
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              className="flex-1"
            />
            {/* {scanned && <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />} */}
          </View>
        ) : (
          <Image
            source={require('../assets/camera.png')}
            resizeMode="contain"
            className="w-52"
          />
        )}
      </View>
      <View className="w-full bg-[#00B1AC] px-5 py-8">
        <View className="gap-3 w-full">
          <Pressable
            className="w-full"
            onPress={() => setOpenCamera(!openCamera)}
          >
            <View className="bg-[#FCDC41] items-center rounded-lg">
              <Text className="text-[#2D2926] font-bold text-[16px] p-2">
                {openCamera ? 'Close' : 'Open'} Camera
              </Text>
            </View>
          </Pressable>
          <Pressable
            android_disableSound
            className="w-full"
            onPress={() => goBack()}
          >
            <View className="bg-white items-center rounded-lg">
              <Text className="text-[#2D2926] font-bold text-[16px] p-2">
                Back
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CameraModule;
