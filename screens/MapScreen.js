import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colours from "../constants/colors";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { mapStyle } from '../constants/mapLabelHiding';
import { Ionicons } from '@expo/vector-icons';

export const MapScreen = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;
          setCurrentLocation({ latitude, longitude });
        })();
      }, []);

      const centerMapToPin = () => {
        if (mapRef.current && currentLocation) {
          mapRef.current.animateToRegion({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
      };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
      <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
        >
            <View style={styles.circleIcon}>
          <Ionicons name="ios-paw" size={24} color="#ffffff" />
        </View>
        </TouchableOpacity>
        <Text style={styles.title}>petSOS</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("User")}
        >
            <View style={styles.circleIcon}>
          <Ionicons name="ios-paw" size={24} color="#ffffff" />
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>Tag 1</Text>
        <Text style={styles.tag}>Tag 2</Text>
        <Text style={styles.tag}>Tag 3</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.circleIcon} onPress={centerMapToPin}>
        <Ionicons name="ios-paw" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {currentLocation && (
        <MapView
          style={styles.map}
          provider={'google'}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
          ref={mapRef}
        >
          <Marker
            coordinate={currentLocation}
            title="Your Location"
            description="This is your current location"
          />
        </MapView>
      )}
      <View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LostAndFound")}
        >
          <Text style={styles.buttonText}>Lost/Found a Pet?</Text>
        </TouchableOpacity>
        <Text style={styles.normalText}>Search and post your pet's information here</Text>
      </View>
      <View style = {{height:200, backgroundColor:Colours.primary}}>
        <Image source={require('../assets/magnifyIcon.png')} 
  style={styles.magImage}/>
  <Image source={require('../assets/pets.png')} 
  style={styles.petsImage}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    padding: 16,
    height: 100,
  },
  circleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    padding: 60,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 70,
    color: Colours.primary_variant,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 320,
    right: 16,
    zIndex: 1,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colours.primary_variant,
    marginTop: 15,
    paddingHorizontal: 16,
    borderRadius: 40,
    height: 50,
    width: 270,
  },
  buttonText: {
    marginTop: 12,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: Colours.primary,
    justifyContent: 'center'
  },
  normalText: {
    marginVertical: 4,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colours.primary_variant,
    justifyContent: 'center'
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  magImage : {
    position: 'absolute',
    bottom: 100,
    left: 20,
    width: 110,
    height: 90,

  },
  petsImage : {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 270,
    height: 180,
    zIndex: 1
  },
});
