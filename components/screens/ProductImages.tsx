import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import ImagePrimary from "@/components/display/image/ImagePrimary";
import { scaleSize } from "@/styles/diamensions";
import SPACING from "@/styles/spacing";
import { COLORS } from "@/constants/Colors";
import { TextPrimary } from "../display/text/TextPrimary";
import TYPOGRAPHY from "@/styles/fontSizes";
import { FontAwesome } from "@expo/vector-icons";


const images = {
  main: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0204753_pe359787_s5.jpg?f=xl",
  sub1: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__1116442_pe872500_s5.jpg?f=xl",
  sub2: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0836444_pe596409_s5.jpg?f=xl",
};

const ProductImages: React.FC = () => {
  const [mainImage, setMainImage] = useState<string>(images.main);
  const subImages = [images.main, images.sub1, images.sub2];
  const handleSubImagePress = (image: string) => {
    setMainImage(image);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <ImagePrimary style={styles.image} source={{ uri: mainImage }} />
      </View>
      <View style={styles.subImagesContainer}>
        {subImages.map((subImage, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSubImagePress(subImage)}
            style={mainImage === subImage ? styles.activeBorder : null}
          >
            <ImagePrimary style={styles.subimg} source={{ uri: subImage }} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.productDetailsMainContainer}>
        <View style={styles.detailsContainer}>
          <TextPrimary style={styles.productname}>EKERO</TextPrimary>
          <View style={styles.pricing}>
            <TextPrimary style={styles.offerPricing}>$230.00</TextPrimary>
            <TextPrimary style={styles.discount}>$512.28</TextPrimary>
            <TextPrimary style={styles.offer}>45%OFF</TextPrimary>
          </View>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={20} color="#EBB65B" />
            <TextPrimary style={styles.ratingContainer}>4.9 (300)</TextPrimary>
          </View>
          <View>
            <TextPrimary style={styles.description}>
              A minimalist chair with a reversible back cushion provides soft
              support for your back and has two sides to wear.
            </TextPrimary>
          </View>
        </View>
        <View style={styles.borderBottom}></View>
      </View>
    </SafeAreaView>
  );
};

export default ProductImages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white.primary,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SPACING.SCALE_20,
    backgroundColor: COLORS.white.primary,
  },
  image: {
    width: scaleSize(200),
    height: scaleSize(200),
  },
  subImagesContainer: {
    flexDirection: "row",
    paddingTop: SPACING.SCALE_30,
    paddingVertical: SPACING.SCALE_20,
    gap: scaleSize(10),
    justifyContent: "center",
    backgroundColor: COLORS.white.primary,
  },
  subimg: {
    width: scaleSize(50),
    height: scaleSize(50),
    borderRadius: SPACING.SCALE_10,
  },
  activeBorder: {
    borderWidth: SPACING.SCALE_2,
    borderRadius: SPACING.SCALE_8,
    borderColor: COLORS.green.secondary,
  },
  productDetailsMainContainer:{
    // margin:SPACING.SCALE_12
    backgroundColor: COLORS.white.secondary,
    borderRadius:SPACING.SCALE_24
  },
  detailsContainer: {
    padding: SPACING.SCALE_16,
    position: "relative",
  },
  productname: {
    fontFamily: "manrope-regular",
    fontWeight: "400",
    fontSize: SPACING.SCALE_16,
    color: COLORS.black.primary,
  },
  pricing: {
    flexDirection: "row",
    gap: SPACING.SCALE_8,
    alignItems: "center",
    color: COLORS.black.primary,
  },
  offerPricing: {
    fontWeight: "800",
    fontSize: TYPOGRAPHY.FONT_XL,
    color: COLORS.black.primary,
  },
  discount: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_14,
    textDecorationLine: "line-through",
    color: COLORS.black.primary,
  },
  offer: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_12,
    width: SPACING.SCALE_60,
    height: SPACING.SCALE_20,
    paddingHorizontal: SPACING.SCALE_6,
    borderTopLeftRadius: SPACING.SCALE_10,
    borderBottomRightRadius: SPACING.SCALE_10,
    backgroundColor: COLORS.red.primary,
    textAlign: "center",
    textAlignVertical: "center",
    color: COLORS.white.primary,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SPACING.SCALE_8,
    gap: SPACING.SCALE_4,
    color: COLORS.black.primary,
  },
  ratingText: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_12,
    marginRight: SPACING.SCALE_4,
  },
  description: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_20,
    color: COLORS.black.primary,
  },
  borderBottom: {
    height: SPACING.SCALE_1,
    backgroundColor: "#E0E0E0",
  },
  starIcon: {
    marginRight: SPACING.SCALE_4,
  },
});
