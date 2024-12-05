import { COLORS } from "@/constants/Colors";
import TYPOGRAPHY from "@/styles/fontSizes";
import SPACING from "@/styles/spacing";
import { Link } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProductList from "./ProductList";



const FrequentlyBought: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { paddingHorizontal: 16 }]}>
        <Text style={styles.heading}>Frequently bought</Text>
        <TouchableOpacity onPress={() => router.push("/products")}>
          <Text style={styles.seemore}>See More</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ProductList />
      </View>
    </View>
  );
};

export default FrequentlyBought;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.SCALE_10,
    backgroundColor: COLORS.white.secondary,
    marginBottom:-10
  },
  heading: {
    fontFamily: "manrope-regular",
    fontWeight: "700",
    fontSize: TYPOGRAPHY.FONT_20,
    color: COLORS.black.primary,
  },
  seemore: {
    fontFamily: "manrope-regular",
    fontWeight: "700",
    fontSize: TYPOGRAPHY.FONT_14,
    color: COLORS.green.secondary,
    textDecorationLine: "underline",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.SCALE_6,
  },
});
