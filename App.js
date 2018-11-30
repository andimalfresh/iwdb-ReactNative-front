import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Products from "./components/Products";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  async componentDidMount() {
    let responce = await fetch("https://iwspiritsdb.herokuapp.com/");
    let json = await responce.json();
    console.log(json);
    this.setState({
      productList: json.data
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./src/wood.jpg")}
      >
        <View>
          <Text> Hello World !</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
});
