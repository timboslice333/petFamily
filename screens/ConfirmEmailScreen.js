import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Auth } from "aws-amplify"
import Colours from "../constants/colors";
import * as Yup from 'yup';

export const ConfirmEmailScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState('');

  const handleConfirmEmail = async (values) => {
    const { email, confirmCode } = values;

    try {
      const response = await Auth.confirmSignUp(email, confirmCode);
      navigation.navigate('Login')
    } catch (error) {
      setErrorState(error.message);
    }
  };

  const handleResend = async (values) => {
    const email = values.email;

    try {
      const response = await Auth.resendSignUp(email);
    } catch (error) {
      setErrorState(error.message);
    }
  };

  return (
    <>
        <View>
        <Image source={require('../assets/image1.png')} style={styles.imageTop}></Image>
        <Text style={styles.textSignUp}>Confirm Email</Text>
        <Formik
          initialValues={{
            email: '',
            confirmCode: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required().email().label('Email'),
            confirmCode: Yup.string().required().min(3).label('Confirmation')
          })}
          onSubmit={values => handleConfirmEmail(values)}
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
                placeholder='Enter Email'
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
                name='confirmCode'
                placeholder='Enter Email Confirmation Code'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='default'
                textContentType='password'
                autoFocus={true}
                value={values.confirmCode}
                onChangeText={handleChange('confirmCode')}
                onBlur={handleBlur('confirmCode')}
                style={styles.textInputCode}
              />
              <TouchableOpacity style={styles.confirmButton} onPress={handleSubmit}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resendButton} onPress={() => handleResend(values)}>
                <Text style={styles.resendButtonText}>Resend Code</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        </View>
      </>
  );
};

const styles = StyleSheet.create({
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
      textInputCode: {
        position: 'absolute',
        top: 320,
        alignSelf: 'center',
        height: 40,
        width: 250,
        borderRadius: 20,
        backgroundColor: 'white',
      },
      confirmButton: {
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        width: '60%',
        backgroundColor: '#2D384C',
        position: 'absolute',
        top: 470,
      },
      confirmButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
      },
      resendButton: {
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        width: '60%',
        backgroundColor: '#2D384C',
        position: 'absolute',
        top: 530,
      },
      resendButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
      },
});
