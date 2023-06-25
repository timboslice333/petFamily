import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import Colours from "../constants/colors";

export const PostsScreen = ({ route,navigation }) => {

  const { imageUri, petName, lastSeenLocation, notes } = route.params;
    const postDateTime = new Date().toLocaleString(); // Get current date and time
  console.log(imageUri);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Post</Text>
        </View>
        <Image
        source={require('../components/IMG_1772.jpg')}
        style={styles.photo}

      />
        <View style={styles.postDateTimeSection}>
          <Text style={styles.label}>Post Date and Time</Text>
          <Text>{postDateTime}</Text>
        </View>
        <View style={styles.photoSection}>
          {/* Add your photo component here */}
        </View>
        <View style={styles.textEntryContainer}>
           <Text>{petName}</Text>
          <Text>{lastSeenLocation}</Text>
          <Text>{notes}</Text>
       </View>
        <View style={styles.tagsSection}>
          <Text style={styles.label}>Tags</Text>
          {/* Add your tags component (Lost/Found) here */}
        </View>
      </View>
    );
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:50,
  },
  photo: {
    alignSelf: 'center',
    width: 350,
    height: 350,
    borderWidth: 10,
    borderColor: Colours.primary_variant,

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postDateTimeSection: {
    marginBottom: 20,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textEntryContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: 'white',
  },
  largeInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  tagsSection: {
    marginBottom: 20,
  },
});
