import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link
        href="/login"
        style={{
          width: 200,
          height: 50,
          marginTop: 20,
          backgroundColor: "#007AFF",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "none",
          fontSize: 16,
          fontWeight: "bold",
          padding: 10,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          elevation: 2,
          textTransform: "uppercase",
          display: "flex",
          alignContent: "center",
          textAlignVertical: "center",
          lineHeight: 24,
        }}
      >
        Go to Login
      </Link>
    </View>
  );
}
