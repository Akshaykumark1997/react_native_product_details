import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { COLORS } from "@/constants/Colors";
import SPACING from "@/styles/spacing";
import { scaleSize } from "@/styles/diamensions";
import TYPOGRAPHY from "@/styles/fontSizes";



const AddToCart: React.FC = () => {
  const [isWishlistAdded, setIsWishlistAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleWishlist = () => {
    setIsWishlistAdded(!isWishlistAdded);
  };

  const handleAddToCart = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Confirmation", "Item added to cart successfully!", [
        { text: "OK" },
      ]);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.wishlistButton,
          isWishlistAdded && styles.wishlistActive,
        ]}
        onPress={toggleWishlist}
      >
        {isWishlistAdded ? (
          <Fontisto name="heart" size={24} color={COLORS.red.primary} />
        ) : (
          <FontAwesome6 name="heart" size={24} color={COLORS.green.secondary} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: SPACING.SCALE_12,
    gap: SPACING.SCALE_16,
    paddingHorizontal: SPACING.SCALE_16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: SPACING.SCALE_14,
    borderTopRightRadius: SPACING.SCALE_14,
    shadowColor: "F8F8F8",
    shadowOpacity: SPACING.SCALE_1,
    shadowRadius: SPACING.SCALE_12,
    elevation: SPACING.SCALE_5,
    paddingBottom: SPACING.SCALE_20,
  },
  wishlistButton: {
    width: scaleSize(56),
    height: scaleSize(46),
    borderRadius: SPACING.SCALE_8,
    borderWidth: SPACING.SCALE_1,
    borderColor: COLORS.green.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  wishlistActive: {
    borderColor: "red",
  },
  cartButton: {
    flex: 1,
    paddingVertical: SPACING.SCALE_12,
    paddingHorizontal: SPACING.SCALE_18,
    borderRadius: SPACING.SCALE_8,
    backgroundColor: COLORS.green.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  cartButtonText: {
    color: "white",
    fontSize: TYPOGRAPHY.FONT_18,
    fontWeight: "600",
  },
});
