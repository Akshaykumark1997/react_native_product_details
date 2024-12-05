import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProductImages from "@/components/screens/ProductImages";
import { MainImageContext } from "@/context/MainImageContex";
import ColorSelect from "@/components/screens/ColorSelect";
import ProductDescription from "@/components/screens/ProductDescription";

  const imagesArr = {
    main: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0204753_pe359787_s5.jpg?f=xl",
    sub1: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__1116442_pe872500_s5.jpg?f=xl",
    sub2: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0836444_pe596409_s5.jpg?f=xl"
  };

const Home:React.FC =()=> {
  const [images, setImages] = useState(imagesArr);

  return (
    <MainImageContext.Provider value={{ images, setImages }}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
        bounces={true} // Enables a smooth bounce effect
        overScrollMode="always"
      >
        <View style={styles.container}>
          <ProductImages />
          <ColorSelect />
          <ProductDescription />
        </View>
      </ScrollView>
    </MainImageContext.Provider>
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