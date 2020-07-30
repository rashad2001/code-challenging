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
} from "react-native";
import { Progress } from "./Progress";
import { Transaction } from "./Transaction";
const text = [
  {
    title: "Current Week",
  },
  {
    title: "Last Week",
  },
  {
    title: "Last Month",
  },
];

export const HomeScreenField = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text>Performance</Text>
      <View style={styles.progressBox}>
        {text.map((text) => (
          <Text style={styles.title}>{text.title}</Text>
        ))}
      </View>
      <Progress />
      <Transaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  progressBox: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    marginLeft: 20,
  },
});
