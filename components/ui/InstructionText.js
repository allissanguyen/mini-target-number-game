import { StyleSheet, Text } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.InstructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  InstructionText: {
    fontFamily: 'open-sans',
    color: "white",
    fontSize: 24,
    marginTop: 10,
  },
});
