import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image} from "react-native";

export const SignupScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ marginTop: 100 }}>
        <Text style={[styles.header_label]}>
          PetSOS
        </Text>
        {/* <Image source={require('../assets/Login.jpg')} style={styles.image} />bbb */}
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>User Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>User Login</Text>
        </TouchableOpacity>
        
        <Text>SignupScreen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.buttonText}>go back to init screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Map")}
        >
          <Text style={styles.buttonText}>go to map screen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header_label: {
    fontSize: 36,
    marginTop: 40,
    marginLeft: 0,
  },
  image: {
    width: 973,
    height: 1163,
    justifyContent: "center",
    alignItems: "center",
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
