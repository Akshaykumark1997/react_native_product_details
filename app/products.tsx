import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Product Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});