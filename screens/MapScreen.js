import React, { useEffect, useState, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colours from "../constants/colors";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { mapStyle } from "../constants/mapLabelHiding";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Tags } from "../components/Tags";
import CustomPinImage from '../assets/currentPos.png';
import FoundPinImage from '../assets/pinFound.png';
import LostPinImage from '../assets/pinLost.png';
import { foundPins, lostPins } from "../data/pins";

export const MapScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef(null);
  const [currentTag, setCurrentTag] = useState("All");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    })();
  }, []);

  const handleTagSelectionChange = (tagName) => {
    setCurrentTag(tagName);
  };

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
      <View style={{ backgroundColor: Colours.primary }}>
        <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <View style={styles.circleIcon}>
              <FontAwesome
                name="wpexplorer"
                size={35}
                color={Colours.primary}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>petSOS</Text>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <View style={styles.circleIcon}>
              <AntDesign name="user" size={35} color={Colours.primary} />
            </View>
          </TouchableOpacity>
        </View>
        <Tags
          onSelectionChange={handleTagSelectionChange}
          activeTag={currentTag}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.circleIcon} onPress={centerMapToPin}>
          <MaterialIcons name="explore" size={37} color={Colours.primary} />
        </TouchableOpacity>
      </View>
      {currentLocation && (
        <MapView
          style={styles.map}
          provider={"google"}
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
          >
             <Image source={CustomPinImage} style={styles.pin} />
            </Marker>
            {(currentTag === "all" || currentTag === "found pets") && foundPins.map((pin, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
            title={pin.title}
          >
            <Image source={FoundPinImage} style={styles.pinImage} />
          </Marker>
        ))}
            
        {(currentTag === "all" || currentTag === "lost pets") && lostPins.map((pin, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
            title={pin.title}
          >
            <Image source={LostPinImage} style={styles.pinImage} />
          </Marker>
        ))}
        </MapView>
      )}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.buttonText}>Lost/Found a Pet?</Text>
        </TouchableOpacity>
        <Text style={styles.normalText}>
          Search and post your pet's information here
        </Text>
      </View>
      <View style={{ height: 200, backgroundColor: Colours.primary }}>
        <Image
          source={require("../assets/magnifyIcon.png")}
          style={styles.magImage}
        />
        <Image
          source={require("../assets/pets.png")}
          style={styles.petsImage}
        />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: 16,
    height: 100,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colours.primary_variant,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
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
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 320,
    right: 16,
    zIndex: 1,
  },
  button: {
    alignSelf: "center",
    backgroundColor: Colours.primary_variant,
    marginTop: 15,
    paddingHorizontal: 16,
    borderRadius: 40,
    height: 50,
    width: 270,
  },
  buttonText: {
    marginTop: 12,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: Colours.primary,
    justifyContent: "center",
  },
  normalText: {
    marginVertical: 4,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: Colours.primary_variant,
    justifyContent: "center",
  },
  magImage: {
    position: "absolute",
    bottom: 100,
    left: 20,
    width: 110,
    height: 90,
  },
  petsImage: {
    position: "absolute",
    bottom: 10,
    right: 20,
    width: 270,
    height: 180,
    zIndex: 1,
  },
  pin: {
    width: 15, // Adjust the width as desired
    height: 15, // Adjust the height as desired
  },
  pinImage: {
    width: 33, // Adjust the width as desired
    height: 40, // Adjust the height as desired
  },
});
