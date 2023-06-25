import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import Colours from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';

export const LostAndFoundScreen = ({navigation, route}) => {
  const { imageUri } = route.params;
  const [petName, setPetName] = useState('');
  const [lastSeenLocation, setLastSeenLocation] = useState('');
  const [lostTime, setLostTime] = useState('');
  const [notes, setNotes] = useState('');

  const handlePostNow = () => {
    navigation.navigate("Posts", {imageUri, petName, lastSeenLocation, lostTime, notes});
  };
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={styles.backIcon}>
            <AntDesign name="arrowleft" size={30} color={Colours.primary_variant} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>petSOS</Text>
        </View>
      <View style = {styles.form}>
      <Image
        source={{ uri: imageUri }}
        style={styles.photo}

      />
      <View style={styles.inputContainer}>
        <TextEntry label="Pet Name" value={petName} onChangeText={setPetName} />
        <TextEntry label="Last Seen Location" value={lastSeenLocation} onChangeText={setLastSeenLocation} />
        <TextEntry label="Lost Time" value={lostTime} onChangeText={setLostTime} />
        <TextEntryLarge label="Notes" value={notes} onChangeText={setNotes} multiline/>
      </View>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.postButton} onPress={handlePostNow}>
        <Text style={styles.buttonText}>Post Now</Text>
      </TouchableOpacity>
      </View>
      </View>

    </View>
  );
};

const TextEntry = ({ label, value, onChangeText, multiline = false }) => {
  return (
    <View style={styles.textEntryContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        style={styles.textInput}
      />
    </View>
  );
};

const TextEntryLarge = ({ label, value, onChangeText, multiline = false }) => {
    return (
      <View style={styles.textEntryContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          style={styles.largeInput}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    marginTop: 40,
  },
  photo: {
    width: 300,
    height: 300,
    borderWidth: 10,
    borderColor: Colours.primary,
    marginTop: 20,
    borderRadius: 30,
  },
  inputContainer: {
    marginTop: 10,
  },
  textEntryContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:Colours.primary_variant
  },
  textInput: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#EEF1F3',
    width:280
  },
  largeInput: {
    borderRadius: 8,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#EEF1F3',
    height: 120,
    textAlignVertical: 'top',
  },
  postButton: {
    width: 250,
    backgroundColor: Colours.primary,
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: 16,
    height: 100,
  },
  title: {
    marginTop: 20,
    padding: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 70,
    color: Colours.primary_variant,
  },
});

