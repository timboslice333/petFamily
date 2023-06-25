import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colours from "../constants/colors";

export const PopUpWindow = ({ navigation, onClose }) => {

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.title}>How can we help you today?</Text>
        <TouchableOpacity onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Camera', {found: false});
              onClose();
            }}
          >
            <Text style={styles.buttonText}>My Pet is Missing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Camera', {found: true});
              onClose();
            }}
          >
            <Text style={styles.buttonText}>I found a Stray Pet</Text>
          </TouchableOpacity>
        </View>
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
    color: Colours.primary_variant,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
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
  },
  closeButtonText: {
    color: Colours.primary_variant,
    fontSize: 18,
    position: 'absolute',
    right: -140,
    top: -60,
  },
});
