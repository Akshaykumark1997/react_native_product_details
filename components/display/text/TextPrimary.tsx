import { Text, StyleSheet, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import TYPOGRAPHY from "../../../styles/fontSizes";
import { COLORS } from "../../../constants/Colors";

const textStyles: Record<string, TextStyle> = {
  xl: {
    fontSize: TYPOGRAPHY.FONT_XL,
  },
  lg: {
    fontSize: TYPOGRAPHY.FONT_L,
  },
  m: {
    fontSize: TYPOGRAPHY.FONT_M,
  },
  b: {
    fontSize: TYPOGRAPHY.FONT_16,
  },
  r: {
    fontSize: TYPOGRAPHY.FONT_R,
  },
  sm: {
    fontSize: TYPOGRAPHY.FONT_S,
  },
  xs: {
    fontSize: TYPOGRAPHY.FONT_XS,
  },
};

interface TextPrimaryProps {
  style?: TextStyle;
  font?: "xl" | "lg" | "m" | "b" | "r" | "sm" | "xs";
  color?: string;
  children: ReactNode;
  [key: string]: any;
}

export const TextPrimary: React.FC<TextPrimaryProps> = ({
  style,
  font = "r",
  color = COLORS.green.secondary,
  children,
  ...otherParams
}) => {
  return (
    <Text
      style={[{ fontSize: textStyles[font].fontSize, color: color }, style]}
      {...otherParams}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: TYPOGRAPHY.FONT.bold,
  },
});
