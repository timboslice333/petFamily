import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colours from "../colors";
import * as Font from "expo-font";

// // Function to load the custom font
// const loadFont = async () => {
//   await Font.loadAsync({
//     'inder-regular': require('./path/to/inder-regular.ttf'),
//   });
// };

// // Call the font loading function
// loadFont();

export const PopUpScreen = () => {
  const [inputText, setInputText] = useState("");

  const handleButtonPress = (option) => {
    // Handle button press based on the selected option
    console.log(`Selected option: ${option}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.title}>How can we help you today?</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("pressed")}
          >
            <Text style={styles.buttonText}>My Pet is Missing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("pressed")}
          >
            <Text style={styles.buttonText}>I found a Stray Pet</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.exitButton}>
          <Text style={styles.exitButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: Colours.primary,
    borderRadius: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 15,
  },
  buttonsContainer: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: Colours.primary_variant,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "inder-regular",
  },
  exitButton: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  exitButtonText: {
    color: Colours.primary_variant,
    fontWeight: "bold",
    fontFamily: "Inder",
  },
});
