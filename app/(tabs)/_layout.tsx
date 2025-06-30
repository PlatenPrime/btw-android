import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#f5f5f5" },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          borderTopColor: "#333333",
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
        },
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "#333333",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today's Habits",
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => <MaterialCommunityIcons name="calendar-today" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="streaks"
        options={{
          title: "Streaks",
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => <MaterialCommunityIcons name="chart-line" size={size} color={color} />,
        }}
      />
        <Tabs.Screen
        name="add-habit"
        options={{
          title: "Add Habit",
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => <MaterialCommunityIcons name="plus-circle" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{ title: "Login", headerShown: true }}
      />
    </Tabs>
  );
}
