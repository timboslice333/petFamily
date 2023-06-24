import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import Colours from '../colors';


export const PostWritingScreen = () => {
  const [petName, setPetName] = useState('');
  const [lastSeenLocation, setLastSeenLocation] = useState('');
  const [lostTime, setLostTime] = useState('');
  const [notes, setNotes] = useState('');

  const handlePostNow = () => {
    // Add your logic to handle the post action here
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/timothyma/petSOS/components/IMG_1772.jpg')}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: Colours.primary,
  },
  photo: {
    width: 350,
    height: 350,
    borderWidth: 10,
    borderColor: Colours.primary_variant,
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 20,
  },
  textEntryContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color:Colours.primary_variant
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: 'white',
    width:280
  },
  largeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    
    fontSize: 16,
    backgroundColor: 'white',
    height: 120,
    textAlignVertical: 'top',
  },
  postButton: {
    width: 200,
    backgroundColor: Colours.primary_variant, 
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

