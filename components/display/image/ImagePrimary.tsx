import React from "react";
import { Image } from "expo-image";
import {  View, StyleSheet, ViewStyle, ImageStyle, ImageSourcePropType, } from "react-native";

interface ImageProps {
  style?: ViewStyle | ImageStyle;
  source: any;
  [key: string]: any;
}

const ImagePrimary: React.FC<ImageProps> = ({ style, source, ...otherProps }) => {
  return (
    <View style={[style as ViewStyle, styles.container]}>
      <Image style={style as ImageStyle} source={source} {...otherProps} />
    </View>
  );
};

export default ImagePrimary;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    position: "absolute",
  },
  hidden: {
    display: "none",
  },
});
