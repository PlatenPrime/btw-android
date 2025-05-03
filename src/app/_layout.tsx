import { Slot } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <View className="flex-1 border-8 border-red-500">
      <Text className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        Welcome to Project ACME
      </Text>
      <Slot />
    </View>
  );
}
