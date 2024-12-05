import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import SPACING from "@/styles/spacing";
import { scaleSize } from "@/styles/diamensions";
import TYPOGRAPHY from "@/styles/fontSizes";
import productsList, { Product } from "@/utils/products";

const ProductList: React.FC = () => {
  const renderItem = ({ item }: { item: Product }) => (
    <View key={item.id} style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.offer}>{item.offer}</Text>
      <Text style={styles.productname}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.originalPrice}>{item.originalPrice}</Text>
      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={20} color={COLORS.golden.primary} />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={productsList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: SPACING.SCALE_10,
    marginLeft: SPACING.SCALE_16,
    marginBottom:4
  },
  container: {
    width: scaleSize(146),
    marginRight: SPACING.SCALE_12,
    backgroundColor: COLORS.white.secondary,
    padding: SPACING.SCALE_16,
    borderRadius: SPACING.SCALE_14,
    shadowColor: "F8F8F8",
    shadowOpacity: SPACING.SCALE_5,
    shadowRadius: SPACING.SCALE_12,
    elevation: SPACING.SCALE_14,
  },
  image: {
    width: scaleSize(110),
    height: scaleSize(110),
    borderRadius: SPACING.SCALE_8,
    marginBottom: SPACING.SCALE_8,
  },
  offer: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_12,
    color: "white",
    position: "absolute",
    bottom: scaleSize(110),
    left: SPACING.SCALE_18,
    backgroundColor: "red",
    paddingHorizontal: SPACING.SCALE_4,
    borderRadius: SPACING.SCALE_4,
    borderTopLeftRadius: SPACING.SCALE_10,
    borderBottomRightRadius: SPACING.SCALE_10,
  },
  productname: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_14,
    marginBottom: SPACING.SCALE_2,
  },
  price: {
    fontWeight: "700",
    fontSize: TYPOGRAPHY.FONT_20,
  },
  originalPrice: {
    fontWeight: "400",
    fontSize: TYPOGRAPHY.FONT_12,
    textDecorationLine: "line-through",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.SCALE_4,
    paddingVertical: SPACING.SCALE_4,
  },
  starIcon: {
    marginRight: SPACING.SCALE_4,
  },
  rating: {
    fontFamily: "manrope-regular",
    fontWeight: "400",
    fontSize: SPACING.SCALE_12,
    marginRight: SPACING.SCALE_4,
  },
});


