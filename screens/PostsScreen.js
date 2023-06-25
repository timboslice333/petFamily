import { Text, View, TouchableOpacity, Image,ImageBackground, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import Colours from "../constants/colors";

export const PostsScreen = ({ route,navigation }) => {
  
  const { petName, lastSeenLocation, notes } = route.params;
  
    //const petName = 'Code';
    //const lastSeenLocation=  'City Park';
    //const notes = 'Friendly and approachable';
    const postDateTime = new Date().toLocaleString(); // Get current date and time
  
    return (
      <View style={styles.container}>
     
      
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Post</Text>
        </View>
        <Image
        source={require('/Users/timothyma/petSOS/components/IMG_1772.jpg')}
        style={styles.photo}
        
      />
        <View style={styles.postDateTimeSection}>
          <Text style={styles.time}>{postDateTime}</Text>
        </View>
        <View style={styles.photoSection}>
          {/* Add your photo component here */}
        </View>
        <View style={styles.textEntryContainer}>
        <Text style={styles.label}>Pet Name : </Text>
        <Text style={styles.text}>{petName}</Text>
        <Text style={styles.label}>Last Seen Location: </Text>
        <Text style={styles.text}>{lastSeenLocation}</Text>
        <Text style={styles.label}>Notes: </Text>
        <Text style={styles.text}>{notes}</Text>
        <View style={styles.tagsSection}>
          <Text style={styles.label}>Tags : Missing</Text>
          {/* Add your tags component (Lost/Found) here */}
        </View>
       </View>
       <Image
        source={require('/Users/timothyma/petSOS/assets/pets.png')}
        style={styles.bottomPhoto}
        
      />
      </View>
    );
  };
  
  

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colours.primary,
    padding: 20,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 20,
    position: "absolute",
    marginTop:60
  },
  photo: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderWidth: 10,
    borderRadius:30,
    borderColor: Colours.primary_variant,
    position: "absolute",
    marginTop:120
  
    
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:30,
    color: Colours.primary_variant
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postDateTimeSection: {
    marginBottom: 20,
    alignSelf: 'center',
    marginTop:440
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textEntryContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:30
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 6,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: 'white',
  },
  largeInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  tagsSection: {
    marginBottom: 50,
  },
  bottomPhoto: {
    
  },
});
