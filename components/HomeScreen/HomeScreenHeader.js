import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Picker,
  Switch,
  TouchableOpacity,
  Slider,
  TextInput,
} from "react-native";
import SearchBar from "react-native-search-bar";

export const HomeScreenHeader = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.header}>Transactions</Text>
      <TextInput placeholder="Search" style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    overflow: "hidden",
    marginBottom: 30,
  },
  header: {
    alignItems: "flex-start",
    fontSize: 23,
  },
  search: {
    borderColor: "gray",
    borderWidth: 5,
    width: "90%",
    height: 35,
    marginTop: 10,
  },
});
