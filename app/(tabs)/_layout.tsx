import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs  screenOptions={{ tabBarActiveTintColor: "orange"}}  >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: true, tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="login"
        options={{ title: "Login", headerShown: true }}
      />
    </Tabs>
  );
}
