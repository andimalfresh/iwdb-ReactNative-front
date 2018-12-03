import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Products from "./components/Products";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      flipLife: false
    };
  }

  async componentDidMount() {
    let responce = await fetch("https://iwspiritsdb.herokuapp.com/");
    let json = await responce.json();
    console.log(json);
    this.setState({
      productList: json.data,
      flipLife: true
    });
  }

  render() {
    // passLiq =
    // this.state.flipLife ?
    //
    //     productList[0].map((item, i) => {
    //     return <Products key={i} info={item} />;
    //   });
    // }
    return (
      <ImageBackground
        style={styles.container}
        source={require("./src/wood.jpg")}
      >
        <View style={styles.top}>
          <Image
            style={{ flex: 1, height: 400, width: 400 }}
            source={require("./src/square16.jpg")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.bottom}>
          <Text>TEST TEST TEST</Text>
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
  },
  top: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center"
  }
});
