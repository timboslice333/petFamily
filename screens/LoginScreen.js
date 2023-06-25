import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Colours from "../constants/colors";
import { Formik } from 'formik';
import { Auth } from 'aws-amplify';
import { AuthenticatedUserContext } from '../providers';
import * as Yup from 'yup';


export const LoginScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState('');
  const { user, setUser } = useContext(AuthenticatedUserContext);

  const checkUser = async () => {
    try{
      console.log("b");
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (error){
      setUser(null);
    }
  };

  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const response = await Auth.signIn(email, password);
      checkUser();
      navigation.navigate("Map");

    } catch(error) {
      console.log(error.message);
      setErrorState(error.message);
    }
  };
  return (
    <>
      <View>
      <Image source={require('../assets/image1.png')} style={styles.imageTop}></Image>
      <Image source={require('../assets/image2.png')} style={styles.imageMedium}></Image>
      <Text style={styles.text}>or connect with</Text>
      <Text style={styles.textLogin}>Log In</Text>
      <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().required().email().label('Email'),
              password: Yup.string().required().min(6).label('Password')
            })}
            onSubmit={values => handleLogin(values)}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              handleBlur
            }) => (
              <>
                {/* Input fields */}
                <TextInput
                  name='email'
                  placeholder='Enter email'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  autoFocus={true}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={styles.textInputUsername}
                />
                <TextInput
                  name='password'
                  placeholder='Enter password'
                  autoCapitalize='none'
                  autoCorrect={false}
                  textContentType='password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  style={styles.textInputPassword}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
      {/* <TextInput
      style={styles.textInputUsername}
        placeholder="  Username">
      </TextInput>
      <TextInput
      style = {styles.textInputPassword}
      placeholder= "  Password">
      </TextInput>
      <TouchableOpacity
          style={styles.loginButton} onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
      style={styles.buttonFacebook}>
        <Text style={styles.buttonTextFacebook}>FaceBook</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonTwitter}>
        <Text style={styles.buttonTextTwitter}>Twitter</Text>
      </TouchableOpacity>
        {/*
        <TouchableOpacity
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
        </TouchableOpacity>
         */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonFacebook: {
    marginVertical: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: "40%",
    backgroundColor: '#0165E1',
    position: 'absolute',
    left: 30,
    top: 670,
  },
  buttonTextFacebook: {
    // color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
    color: 'white',
  },
  buttonTwitter: {
    marginVertical: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: "40%",
    backgroundColor: '#1DA1F2',
    position: 'absolute',
    right: 30,
    top: 670,
  },
  buttonTextTwitter: {
    // color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
    color: 'white',
  },
  imageTop: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 450,
    height: 650,
    position: 'absolute',
    zIndex: 1,
  },
  imageMedium: {
    alignSelf: 'center',
    width: '100%',
    height: 120,
    marginTop:540
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: Colours.primary_variant,
    zIndex: 2,
  },
  textLogin: {
    alignSelf: 'center',
    position: 'absolute',
    top: 150,
    fontSize: 36,
    fontWeight: '500',
    zIndex: 2,
    color: Colours.primary_variant,
  },
  textInputUsername: {
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
    height: 40,
    width: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    zIndex: 2,
  },
  textInputPassword: {
    position: 'absolute',
    top: 370,
    alignSelf: 'center',
    height: 40,
    width: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    zIndex: 2,
  },
  loginButton: {
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    width: '60%',
    backgroundColor: '#2D384C',
    position: 'absolute',
    top: 500,
    zIndex:2,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});