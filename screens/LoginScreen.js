import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <>
      <View style={[styles.container, { backgroundColor: '#FDBD4E' }]}>
        <Text></Text>
        <Text></Text>
        <Text>LoginScreen</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={[styles.header_label]}>PepSOS</Text>
        <Text style={[styles.header_label]}></Text>
        <Text style={[styles.header_label]}></Text>
        <Image source={require('../assets/Login.jpg')} style={styles.image}></Image>
        <TouchableOpacity
          style={styles.signUp_Login_button}
        >
          <Text style={styles.signUp_Login_text}>User Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp_Login_button}
        >
          <Text style={styles.signUp_Login_text}>User Login</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text style={[styles.subscrip_text]}>No credit card required for the trial, 
        cancel at any time before the renew for $4.99 / month subscription fee to avoid getting charged.
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={[styles.web_text]}>Need more help? Contact Support</Text>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.buttonText}>go back to init screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Map")}
        >
          <Text style={styles.buttonText}>go to map screen</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
  },
  header_label: {
    fontSize: 36,
    fontWeight: 500,
    marginTop: 0,
    marginLeft: 0,
    textAlign: 'center',
  },
  image: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp_Login_button: {
    marginTop: 10,
    marginVertical: 5,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '60%',
    backgroundColor: '#2D384C',
  },
  signUp_Login_text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  web_text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    textDecorationLine: 'underline',
  },
  subscrip_text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
  },
  button: {
    marginVertical: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundColor: "#000000",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "#ffffff",
  },
});