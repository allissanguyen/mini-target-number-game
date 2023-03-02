import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

import Title from "../ui/Title";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.lighter,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.lighter,
    fontSize: 36,
    // fontWeight:'bold',
    fontFamily: "open-sans-bold",
  },
});
