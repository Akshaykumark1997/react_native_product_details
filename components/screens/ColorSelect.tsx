import { View, StyleSheet, TouchableOpacity } from "react-native"
import { TextPrimary } from "../display/text/TextPrimary"
import { COLORS } from "@/constants/Colors";
import SPACING from "@/styles/spacing";
import TYPOGRAPHY from "@/styles/fontSizes";
import { scaleSize } from "@/styles/diamensions";
import { useContext } from "react";
import { MainImageContext } from "@/context/MainImageContex";

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
           main: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-dark-grey__0983033_pe815899_s5.jpg?f=xl",
           sub1: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-dark-grey__0951659_pe801307_s5.jpg?f=xl",
           sub2: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-dark-grey__0951660_pe801308_s5.jpg?f=xl",
         });
       } else {
         setImages({
           main: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0204753_pe359787_s5.jpg?f=xl",
           sub1: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__1116442_pe872500_s5.jpg?f=xl",
           sub2: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0836444_pe596409_s5.jpg?f=xl",
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
    borderColor: "#E0E0E0",
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
    backgroundColor: "#E0E0E0",
    flexDirection: "row",
  },
});