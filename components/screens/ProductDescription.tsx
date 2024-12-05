import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "@/constants/Colors";
import SPACING from "@/styles/spacing";
import TYPOGRAPHY from "@/styles/fontSizes";


const ProductDescription:React.FC = () => {
     const [isToggleDescription, setIsToggleDescription] = useState<boolean>(false);

     const toggleDescription = () => {
       setIsToggleDescription(!isToggleDescription);
     };
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={styles.heading}>Product Description</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDescription}>
              <AntDesign
                name={!isToggleDescription ? "down" : "up"}
                size={24}
                color={COLORS.black.primary}
              />
            </TouchableOpacity>
          </View>
          {isToggleDescription && (
            <Text style={styles.description}>
              Choose a stylish dark color or brighten up your home with colorful
              sarongs. The EKERÖ armchair has a sleek and modern look with two
              sides that meet at the back – and a waist support for added
              comfort!
            </Text>
          )}
        </View>
        <View style={styles.borderBottom}></View>
      </>
    );
}

export default ProductDescription

const styles = StyleSheet.create({
  container: {
    padding: SPACING.SCALE_16,
    gap: SPACING.SCALE_10,
    backgroundColor: COLORS.white.secondary,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "manrope-regular",
    fontWeight: "700",
    fontSize: TYPOGRAPHY.FONT_20,
    color: COLORS.black.primary,
  },
  description: {
    fontFamily: "manrope-regular",
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_16,
    color: COLORS.black.primary,
  },
  borderBottom: {
    height: 1,
    backgroundColor: COLORS.gray.primary,
  },
});