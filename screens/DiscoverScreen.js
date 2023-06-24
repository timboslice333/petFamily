import Colours from "../constants/colors";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const DiscoverScreen = ({ navigation }) => {
  return (
    <>
      <View>
      <View style={styles.banner} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.buttonText}>go back to map screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Posts")}
        >
          <Text style={styles.buttonText}>go to posts screen</Text>
        </TouchableOpacity>
        <Text>DiscoverScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 200,
  },
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundColor: "#000000",
  },
  buttonText: {
    // color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "#ffffff",
  },
});
