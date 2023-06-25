import React, { useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Colours from "../constants/colors";
import { Formik } from 'formik';
import { Auth } from 'aws-amplify';
import * as Yup from 'yup';

export const SignupScreen = ({navigation}) => {
  const [errorState, setErrorState] = useState('');

  const handleSignup = async values => {
    const { email, password } = values;
    const username = email;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
      }
      });
      navigation.navigate("ConfirmEmail");
    } catch (error) {
      console.log(error.message);
      setErrorState(error.message);
    }
  };
    return (
      <>
        <View>
        <Image source={require('../assets/image1.png')} style={styles.imageTop}></Image>
        <Text style={styles.text}>or connect with</Text>
        <Text style={styles.textSignUp}>Sign Up</Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required().email().label('Email'),
            password: Yup.string().required().min(6).label('Password'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Confirm Password must match password.')
              .required('Confirm Password is required.')
          })}
          onSubmit={values => handleSignup(values)}
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
                textContentType='newPassword'
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                style={styles.textInputPassword}
              />
              <TextInput
                name='confirmPassword'
                placeholder='Enter password'
                autoCapitalize='none'
                autoCorrect={false}
                textContentType='password'
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                style={styles.textInputConfirmPassword}
              />
              <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
                <Text style={styles.signupButtonText}>Signup</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
  
        <TouchableOpacity
        style={styles.buttonFacebook}>
          <Text style={styles.buttonTextFacebook}>FaceBook</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        style={styles.buttonTwitter}>
          <Text style={styles.buttonTextTwitter}>Twitter</Text>
        </TouchableOpacity>
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
    },
    text: {
      marginTop: 20,
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '500',
      color: Colours.primary_variant,
    },
    textSignUp: {
      alignSelf: 'center',
      position: 'absolute',
      top: 150,
      fontSize: 36,
      fontWeight: '500',
    },
    textInputUsername: {
      position: 'absolute',
      top: 250,
      alignSelf: 'center',
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    textInputPassword: {
      position: 'absolute',
      top: 320,
      alignSelf: 'center',
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    textInputConfirmPassword: {
      position: 'absolute',
      top: 390,
      alignSelf: 'center',
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    signupButton: {
      borderRadius: 40,
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
      width: '60%',
      backgroundColor: '#2D384C',
      position: 'absolute',
      top: 500,
    },
    signupButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
    },
  });