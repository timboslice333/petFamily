import Colours from "../constants/colors";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const DiscoverScreen = ({ navigation }) => {
  return (
    <>
      <View>
      <View style={styles.banner} />
        <TouchableOpacity style={styles.picture_1}>
        <Image source={require('../assets/Disc_Pic.jpeg')} style={styles.picture_2}></Image>
        </TouchableOpacity>
        <View style={styles.rectangle} />
        <Text style={styles.rect_text}>Found my dog Using PetSOS!</Text>
        <Text style={styles.timer_text}>12 minutes</Text>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.buttonText}>go back to map screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Posts")}
        >
          <Text style={styles.buttonText}>go to posts screen</Text>
        </TouchableOpacity>
        <Text>DiscoverScreen</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture_1: {
    borderRadius: 10,
    alignContent: 'center',
    position: 'absolute',
    top: 100,
    left: 150,
  },
  picture_2: {
    borderRadius: 10,
    alignContent: 'center',
    position: 'absolute',
    top: -20,
    left: -135,
    width: 400,
    height: 250,
  },
  rectangle: {
    backgroundColor: '#FDBD4E',
    position: 'absolute',
    borderRadius: 10,
    top: 280,
    left: 15,
    width: 400,
    height: 150,
  },
  rect_text: {
    fontSize: 36,
    fontWeight: "600",
    color: "#2D384C",
    position: 'absolute',
    top: 300,
    left: 40,
  },
  timer_text: {
    fontsize: 16,
    fontWeight: '400',
    color: '#2D384C',
    position: 'absolute',
    top: 395,
    left: 40,
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 200,
  },
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundColor: "#000000",
  },
  buttonText: {
    // color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "#ffffff",
  },
});
