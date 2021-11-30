import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

function Search() {
  const [search, onChangeText] = useState("");

  useEffect(() => {
    console.log(search);
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Enter search term"
        value={search}
        onChangeText={onChangeText}
      />
      <Button color="orange" title="Search"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  search: {
    backgroundColor: "white",
    padding: 5,
    marginHorizontal: 5,
  },
});

export default Search;
