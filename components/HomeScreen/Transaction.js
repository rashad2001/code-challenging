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

const users = [
  {
    name: "Ada Lovelace",
    money: "$2000",
  },
  {
    name: "Mark Hopper",
    money: "$4000",
  },
  {
    name: "Maragaret Hamilton",
    money: "$8000",
  },
];

export const Transaction = () => {
  return (
    <View style={styles.container}>
      {users.map((users) => (
        <View>
          <View style={styles.currentWeek}>
            <Text>{users.name}</Text>
            <Text style={styles.money}>{users.money}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  currentWeek: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  money: {
    marginRight: 40,
  },
});
