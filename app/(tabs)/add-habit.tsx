import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, SegmentedButtons, Text, TextInput } from "react-native-paper";

const FREQUENCIES = [
  ["daily", "Daily"],
  ["weekly", "Weekly"],
  ["monthly", "Monthly"],
];
type Frequency = (typeof FREQUENCIES)[number][0];

export default function AddHabitScreen() {

const [title, setTitle] = useState<string>("");
const [description, setDescription] = useState<string>("");

const [frequency, setFrequency] = useState<Frequency>("daily");




  return (
    <View style={styles.container}>
      <TextInput label={"Title"} mode="flat" style={styles.input} onChangeText={setTitle} />
      <TextInput label={"Description "} mode="flat" style={styles.input} onChangeText={setDescription} />
      <View style={styles.frequencyContainer}>
        <SegmentedButtons
          value={frequency}
          buttons={FREQUENCIES.map(([value, label]) => ({
            value,
            label,
          }))}
        
          onValueChange={(value) => setFrequency(value as Frequency)}
        />
      </View>

      <Button mode="contained" onPress={() => {}} disabled={!title || !description}>
        Add Habit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    marginBottom: 16,
  },
  frequencyContainer: {
     marginBottom: 24,
  },
  

});
