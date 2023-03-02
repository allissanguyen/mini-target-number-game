import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: Colors.lighter,
    textAlign: "center",
    borderWidth: 3,
    borderColor: Colors.lighter,
    padding: 12,
  },
});
