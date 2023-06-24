import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export const InitScreen = () => {
  return (
    <>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Init</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundColor: "#111111",
  },
  buttonText: {
    // color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
