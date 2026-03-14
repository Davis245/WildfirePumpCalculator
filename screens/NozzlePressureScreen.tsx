import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NozzlePressureScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nozzle Pressure Calculator</Text>
      <Text style={styles.placeholder}>Coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 16,
    color: "#666",
  },
});
