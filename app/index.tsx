import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProductImages from "@/components/screens/ProductImages";
import { MainImageContext } from "@/context/MainImageContex";
import ColorSelect from "@/components/screens/ColorSelect";
import ProductDescription from "@/components/screens/ProductDescription";
import SizeChart from "@/components/screens/SizeChart";
import FrequentlyBought from "@/components/screens/FrequentlyBought";
import AddToCart from "@/components/screens/AddToCart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Asset } from "expo-asset";

const Home:React.FC =()=> {
  const [images, setImages] = useState({
    main: Asset.fromModule(require("../assets/images/chair_yellow_main.png")),
    sub1: Asset.fromModule(require("../assets/images/chair_yellow_sub1.png")),
    sub2: Asset.fromModule(require("../assets/images/chair_yellow_sub2.png")),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainImageContext.Provider value={{ images, setImages }}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          bounces={true}
          overScrollMode="always"
        >
          <View style={styles.container}>
            <ProductImages />
            <ColorSelect />
            <ProductDescription />
            <SizeChart />
            <FrequentlyBought />
            <AddToCart />
          </View>
        </ScrollView>
      </MainImageContext.Provider>
    </GestureHandlerRootView>
  );
}
export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
  },
});