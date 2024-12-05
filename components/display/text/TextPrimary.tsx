import { Text, StyleSheet, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import typography from "../../../styles/fontSizes";
import { Colors } from "../../../constants/Colors";

const textStyles: Record<string, TextStyle> = {
  xl: {
    fontSize: typography.FONT_XL,
  },
  lg: {
    fontSize: typography.FONT_L,
  },
  m: {
    fontSize: typography.FONT_M,
  },
  b: {
    fontSize: typography.FONT_16,
  },
  r: {
    fontSize: typography.FONT_R,
  },
  sm: {
    fontSize: typography.FONT_S,
  },
  xs: {
    fontSize: typography.FONT_XS,
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
  color = Colors.green.secondary,
  children,
  ...otherParams
}) => {
  return (
    <Text
      style={[
        { fontSize: textStyles[font].fontSize, color: color },
        style,
      ]}
      {...otherParams}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: typography.FONT.bold,
  },
});
