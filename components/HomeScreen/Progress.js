import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ProgressCircle from "react-native-progress-circle";
const data = [
  {
    text: "30%",
    progress: 30,
    color: "red",
  },
  {
    progress: 60,
    text: "60%",
    color: "green",
  },
  {
    progress: 85,
    text: "85%",
    color: "blue",
  },
];

export const Progress = () => {
  return (
    <View style={styles.container}>
      {data.map((data) => (
        <ProgressCircle
          style={styles.circle}
          percent={data.progress}
          radius={50}
          borderWidth={8}
          color={data.color}
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 18 }}>{data.text}</Text>
        </ProgressCircle>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  circle: {
    marginLeft: 20,
  },
});
