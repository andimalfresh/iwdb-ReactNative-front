import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const Products = props => {
  return (
    <View>
      {props.info.product}
      {props.info.price}
    </View>
  );
};
export default Products;
