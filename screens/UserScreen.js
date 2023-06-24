import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colours from "../constants/colors";
export const UserScreen = ({ navigation }) => {
  return (
    <>
      <View style={[styles.container,  {backgroundColor: Colours.secondary}]}>
        <View style={styles.banner}></View>
        <View style={styles.otherContainer}>
        <Text style={styles.text}>Hello, Timothy!</Text>
        <Image source={require('../assets/pets.png')} style={styles.profileImage}></Image>
        {/* go back to map screen */}
        <View style={styles.menu}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.buttonText}>Back to Map</Text>
        </TouchableOpacity>
        {/* edit your pet information */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PetInfo")}
        >
          <Text style={styles.buttonText}>Edit Your Pet Information</Text>
        </TouchableOpacity>
        {/* Privacy adn Data */}
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Privacy & Data</Text>
        </TouchableOpacity>
        {/* Notification */}
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Notification</Text>
        </TouchableOpacity>
        {/* Invite Your Friends */}
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Invite Your Friends</Text>
        </TouchableOpacity>
        {/* help */}
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        {/* help */}
        <TouchableOpacity
          style={styles.logoutButton}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        </View>
        </View>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  otherContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 1,
    height: 55,
    justifyContent: "center",
    padding: 15,
    width: "100%",
    backgroundColor: Colours.primary,
    borderColor: "000000"
    
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: "500",
    color: Colours.primary_variant,
  },
  text: {
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: '500',
    color: Colours.primary_variant,
  },
  menu: {
    alignItems: 'center',
    width: 400,

  },
  profileImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderWidth: 3,
  },
  logoutButton: {
    marginVertical: 5,
    marginTop: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '60%',
    backgroundColor: '#2D384C',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: 16,
    height: 100,
  },
});
