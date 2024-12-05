import React, { useState } from "react";
import { View } from "react-native";
import ProductImages from "@/components/screens/ProductImages";
import { MainImageContext } from "@/context/MainImageContex";
import ColorSelect from "@/components/screens/ColorSelect";

  const imagesArr = {
    main: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0204753_pe359787_s5.jpg?f=xl",
    sub1: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__1116442_pe872500_s5.jpg?f=xl",
    sub2: "https://www.ikea.com/in/en/images/products/ekeroe-armchair-skiftebo-yellow__0836444_pe596409_s5.jpg?f=xl"
  };

const Home:React.FC =()=> {
  const [images, setImages] = useState(imagesArr);

  return (
      <MainImageContext.Provider value={{ images, setImages }}>
        <View>
          <ProductImages />
          <ColorSelect />
        </View>
      </MainImageContext.Provider>

  );
}
export default Home;
