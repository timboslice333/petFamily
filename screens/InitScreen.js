import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export const InitScreen = ({navigation}) => {
  return (
    <>
      <View>
        <TouchableOpacity style={[styles.button, {marginTop: 100}]} onPress={() => navigation.navigate('pop')}>
          <Text style={styles.buttonText}>go to login screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>go to signup screen</Text>
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
    backgroundColor: "#000000",
  },
  buttonText: {
    // color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "#ffffff"
  },
});
