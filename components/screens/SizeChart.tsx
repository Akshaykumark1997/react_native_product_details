import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "@/constants/Colors";
import { scaleSize } from "@/styles/diamensions";
import SPACING from "@/styles/spacing";
import TYPOGRAPHY from "@/styles/fontSizes";
import { Asset } from "expo-asset";
import ImagePrimary from "../display/image/ImagePrimary";


interface SizeItem {
  label: string;
  value: string;
}

const sizes: SizeItem[] = [
  { label: "Width", value: "70cm" },
  { label: "Depth", value: "70cm" },
  { label: "Height", value: "70cm" },
  { label: "Seat Width", value: "70cm" },
  { label: "Seat Depth", value: "70cm" },
  { label: "Seat Height", value: "70cm" },
];

const SizeChart: React.FC = () => {
     const [isToggleDescription, setIsToggleDescription] =
       useState<boolean>(false);

     const toggleSize = () => {
       setIsToggleDescription(!isToggleDescription);
     };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleSize}>
          <Text style={styles.heading} onPress={toggleSize}>
            Size
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSize}>
          <AntDesign
            name={!isToggleDescription ? "down" : "up"}
            size={24}
            color={COLORS.black.primary}
            style={styles.downArrow}
          />
        </TouchableOpacity>
      </View>
      {isToggleDescription && (
        <>
          {sizes.map((item, index) => (
            <View key={index}>
              <View style={styles.headerContainer}>
                <Text style={styles.label}>{item.label}:</Text>
                <Text style={styles.label}>{item.value}</Text>
              </View>
              {index < sizes.length - 1 && <View style={styles.borderBottom} />}
            </View>
          ))}
          <ImagePrimary
            style={styles.imgContainer}
            source={Asset.fromModule(
              require("../../assets/images/chair_diamensions.png")
            )}
          />
        </>
      )}
    </View>
  );
};

export default SizeChart;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.SCALE_16,
    backgroundColor: COLORS.white.secondary,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "700",
    fontSize: TYPOGRAPHY.FONT_20,
    paddingBottom: SPACING.SCALE_14,
    color: COLORS.black.primary,
  },
  label: {
    fontWeight: "400",
    fontSize: 14,
  },
  imgContainer: {
    alignSelf: "center",
    width: scaleSize(263),
    height: scaleSize(263),
    marginTop: SPACING.SCALE_20,
  },
  downArrow: {
    marginBottom: SPACING.SCALE_10,
  },
  borderBottom: {
    height: 1,
    backgroundColor: COLORS.gray.primary,
    marginTop: SPACING.SCALE_10,
    marginBottom: SPACING.SCALE_10,
  },
});
