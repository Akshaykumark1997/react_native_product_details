import React from "react";
import { Image, View, StyleSheet, ViewStyle, ImageStyle, ImageSourcePropType, } from "react-native";

interface ImageProps {
  style?: ViewStyle | ImageStyle;
  source: ImageSourcePropType;
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
