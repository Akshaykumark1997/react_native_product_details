import { View, StyleSheet, TouchableOpacity } from "react-native"
import { TextPrimary } from "../display/text/TextPrimary"
import { COLORS } from "@/constants/Colors";
import SPACING from "@/styles/spacing";
import TYPOGRAPHY from "@/styles/fontSizes";
import { scaleSize } from "@/styles/diamensions";
import { useContext } from "react";
import { MainImageContext } from "@/context/MainImageContex";
import { Asset } from "expo-asset";

const colors = [
  { color: COLORS.golden.primary, name: "Harvest Gold" },
  { color: COLORS.black.primary, name: "Eerie Black" },
  { color: COLORS.red.secondary, name: "Flame" },
  { color: COLORS.green.primary, name: "Pakistan Green" },
];
const ColorSelect: React.FC = () => {
    const { setImages } = useContext(MainImageContext);

     const handleColorChange = (color: any) => {
       if (color === "Eerie Black") {
         setImages({
           main: Asset.fromModule(
             require("../../assets/images/chair_black_main.png")
           ),
           sub1: Asset.fromModule(
             require("../../assets/images/chair_black_sub1.png")
           ),
           sub2: Asset.fromModule(
             require("../../assets/images/chair_black_sub2.png")
           ),
         });
       } else {
         setImages({
           main: Asset.fromModule(
             require("../../assets/images/chair_yellow_main.png")
           ),
           sub1: Asset.fromModule(
             require("../../assets/images/chair_yellow_sub1.png")
           ),
           sub2: Asset.fromModule(
             require("../../assets/images/chair_yellow_sub2.png")
           ),
         });
       }
     };
    return (
      <>
        <View style={styles.container}>
          <TextPrimary style={styles.heading}>Colors</TextPrimary>
          <View style={styles.colorcontainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleColorChange(color.name)}
              >
                <View style={styles.buttonContainer}>
                  <View
                    style={[
                      styles.colorDisplay,
                      { backgroundColor: color.color },
                    ]}
                  />
                  <TextPrimary style={styles.name}>{color.name}</TextPrimary>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.borderBottom}></View>
      </>
    );
}

export default ColorSelect;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.SCALE_14,
    gap: SPACING.SCALE_10,
    backgroundColor: COLORS.white.secondary,
  },
  heading: {
    fontSize: TYPOGRAPHY.FONT_20,
    fontWeight: "500",
  },
  colorcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: SPACING.SCALE_20,
  },

  buttonContainer: {
    width: scaleSize(163),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: SPACING.SCALE_1,
    borderColor: COLORS.gray.primary,
    borderRadius: SPACING.SCALE_10,
    padding: SPACING.SCALE_12,
  },
  name: {
    color: COLORS.black.primary,
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_14,
  },

  colorDisplay: {
    width: SPACING.SCALE_30,
    height: SPACING.SCALE_30,
    borderRadius: SPACING.SCALE_2,
    marginRight: SPACING.SCALE_8,
  },

  borderBottom: {
    height: SPACING.SCALE_1,
    backgroundColor: COLORS.gray.primary,
    flexDirection: "row",
  },
});