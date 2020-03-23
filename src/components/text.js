import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textFont: { fontFamily: "open-sans-bold" }
});

export default p => {
  const { style, ...rest } = p;
  return <Text {...rest} style={[style, styles.textFont]}></Text>;
};
