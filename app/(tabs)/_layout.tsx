import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "orange" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{ title: "Login", headerShown: true }}
      />
    </Tabs>
  );
}
