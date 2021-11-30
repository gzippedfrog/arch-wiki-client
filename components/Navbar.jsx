import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Search from "./Search";

const Navbar = () => (
  <View style={styles.container}>
    <Text style={{ color: "white" }}>Arch Wiki</Text>
    <Search />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    flexDirection: "row",
  },
});

export default Navbar;
