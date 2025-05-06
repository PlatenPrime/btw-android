import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SkladScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container1}>
        <ThemedText style={styles.item}  type="subtitle">Ряди</ThemedText>
        <ThemedText style={styles.item} type="subtitle">Позиції</ThemedText>
        <ThemedText style={styles.item} type="subtitle">Ряди</ThemedText>
        <ThemedText style={styles.item} type="subtitle">Склад</ThemedText>
        <ThemedText style={styles.item} type="subtitle">Склад</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  container1 : {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: 10,
    gap: 10,
  },
  item: {
    width: "45%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
  },

});