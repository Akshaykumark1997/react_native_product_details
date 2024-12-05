import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import TYPOGRAPHY from "../../../styles/fontSizes";
import { COLORS } from "../../../constants/Colors";
import { TextPrimary } from "../../../components/display/text/TextPrimary";


interface ButtonPrimaryProps {
  title: string;
  onPress?: () => void;
}


const PrimaryButton: React.FC<ButtonPrimaryProps> = ({ title = "", onPress }) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View style={[styles.button]}>
        <TextPrimary style={styles.text}>{title}</TextPrimary>
      </View>
    </Pressable>
  );
};


export default PrimaryButton;

const styles = StyleSheet.create({
  wrapper: {
    width: "50%",
  },
  button: {
    paddingVertical: TYPOGRAPHY.FONT_12,
    paddingHorizontal: TYPOGRAPHY.FONT_14,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#146651",
  },
  text: {
    color: COLORS.white.secondary,
    fontWeight: "500",
    // color: "#FFF"
  },
  outlinedButton: {
    borderWidth: 1,
    paddingVertical: TYPOGRAPHY.FONT_11,
    borderColor: COLORS.green.primary,
  },
});
