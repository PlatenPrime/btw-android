import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    width: 100,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "blue",
  },
});
