import { Text, View, Image, StyleSheet } from "react-native";
import Colours from "../constants/colors";

export const PostsScreen = ({ route, navigation }) => {

  const {isNew, post} = route.params;
  let name;
  let breed;
  let location = post.location;
  let notes = post.notes;
  if (post.found) {
    breed = post.breed;
  } else {
    name = post.name;
  }
  

  // const { imageUri, petName, lastSeenLocation, notes } = route.params;
    const postDateTime = isNew? new Date().toLocaleString() : post.time; // Get current date and time
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {isNew ? <Text style={styles.headerText}>Your Post</Text> : <Text style={styles.headerText}>petSOS</Text>
          }
        </View>
        <Image
        source={post.imageUrl}
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
