import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colours from "../constants/colors";
import { AntDesign } from '@expo/vector-icons';

export const PostsScreen = ({ route, navigation }) => {
  
  const { petName, lastSeenLocation, notes } = route.params;
    const postDateTime = new Date().toLocaleString(); // Get current date and time
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={styles.backIcon}>
            <AntDesign name="arrowleft" size={30} color={Colours.primary_variant} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>Your Post</Text>
        </View>

        <Image
        source={require('../components/IMG_1772.jpg')}
        style={styles.photo}
        
      />
        <View style={styles.postDateTimeSection}>
          <Text style={styles.time}>{postDateTime}</Text>
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
        </View>
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Map");
        }}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        </View>
       </View>
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
    backgroundColor: 'white',
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
  backIcon: {
    marginTop: 40,
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
    marginHorizontal: 60,
    color: Colours.primary_variant,
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
    marginTop:400
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
  button: {
    width: '40%',
    backgroundColor: Colours.primary,
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 8,
    color: Colours.primary_variant,
    fontSize: 20,
  }
});