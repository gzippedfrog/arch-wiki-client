import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";

export default function App() {
  const [state, setState] = useState({});

  // useEffect(() => fetchData());

  // const fetchData = async () => {
  //   const url = "https://wiki.archlinux.org/title/Daemons";

  //   try {
  //     let response = await fetch(url);
  //     response = await response.text();
  //     setState(response);
  //     // console.log(response);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Navbar style={styles.navbar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  navbar: {
    backgroundColor: "steelblue",
    padding: 5,
  },
});
