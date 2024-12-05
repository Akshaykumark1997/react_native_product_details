import { COLORS } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BestSellerBadge:React.FC =()=> {
  return (
    <View style={styles.container1}>
        <View style={styles.ribbon1}>
          <Text style={styles.text1}>Best Seller</Text>
        </View>
        <View style={styles.cutContainer}>
          <View style={styles.cutTriangle1} />
          <View style={styles.cutTriangle2} />
        </View>
      </View>
  );
}

export default BestSellerBadge

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    alignItems: "center",
  },
  ribbon1: {
    backgroundColor: COLORS.red.light,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  text1: {
    color: COLORS.white.secondary,
    fontWeight: "bold",
    fontSize: 14,
  },
  cutContainer: {
    position: "relative",
    width: 20,
    height: 30,
    transform: [{ rotate: "180deg" }],
  },
  cutTriangle1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderTopWidth: 30,
    borderTopColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "#E74C3C",
  },
  cutTriangle2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderBottomWidth: 30,
    borderBottomColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: COLORS.red.dark,
  },
});
