import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colours from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Auth } from 'aws-amplify';

export const UserScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("log out error: ", error)
    }
  };

  const logOut = () => {
    alert("Logging Out");
    handleLogout();
  }
  return (
    <>
      <View style={[styles.container,  {backgroundColor: Colours.secondary}]}>
      <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={styles.backIcon}>
            <AntDesign name="arrowleft" size={30} color={Colours.primary_variant} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>petSOS</Text>
        </View>
        <View style={styles.otherContainer}>
        <Text style={styles.text}>Hello, Timothy!</Text>
        <Image source={require('../assets/pets.png')} style={styles.profileImage}></Image>
        {/* go back to map screen */}
        <View style={styles.menu}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Change Your Password</Text>
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
          style={styles.logoutButton} onPress={logOut}
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
  backIcon: {
    marginTop: 40,
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: 16,
    height: 120,
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
  otherContainer: {
    marginTop: 20,
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
});
