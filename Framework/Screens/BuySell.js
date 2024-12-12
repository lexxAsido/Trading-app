import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const BuySell = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Limit Price</Text>
      <TextInput style={styles.input} placeholder="0.00 USD" keyboardType="numeric" />

      <Text style={styles.label}>Amount</Text>
      <TextInput style={styles.input} placeholder="0.00 BTC" keyboardType="numeric" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy BTC</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 4,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#00C49A",
    padding: 15,
    marginTop: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default BuySell;
