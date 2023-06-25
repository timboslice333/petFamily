import Colours from "../constants/colors";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export const DiscoverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.picture_1}>
            <Image
              source={require("../assets/Disc_Pic.jpeg")}
              style={styles.picture_1}
            />
          </TouchableOpacity>
          <View style={styles.rectangle}>
            <Text style={styles.rect_text}>Found my dog Using PetSOS!</Text>
            <Text style={styles.timer_text}>12 minutes</Text>
          </View>
          <Text style={styles.missing_post_text}>Posts for Missing</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.missingPostsContainer}
          >
            <TouchableOpacity style={styles.missPostContainer}>
              <Image
                source={require("../assets/istockphoto-497384624-612x612.jpg")}
                style={styles.missPostImage}
              />
              <View style={styles.missPostTextContainer}>
                <Text style={styles.missPostText}>Missing Dog Bell</Text>
                <Text style={styles.missPostTime}>8 minutes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.missPostContainer}>
              <Image
                source={require("../assets/KOA_Nassau_2697x1517.jpg")}
                style={styles.missPostImage}
              />
              <View style={styles.missPostTextContainer}>
                <Text style={styles.missPostText}>Candy is Missing!!!</Text>
                <Text style={styles.missPostTime}>12 minutes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.missPostContainer}>
              <Image
                source={require("../assets/header_image_sleeping_place_dog.jpg")}
                style={styles.missPostImage}
              />
              <View style={styles.missPostTextContainer}>
                <Text style={styles.missPostText}>Oreo disappered ...</Text>
                <Text style={styles.missPostTime}>50 minutes</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.missing_post_text}>Posts for Missing</Text>
            <ScrollView horizontal contentContainerStyle={styles.missingPostsContainer}>
              <TouchableOpacity style={styles.missPostContainer}>
                <Image
                  source={require('../assets/Found1.jpeg')}
                  style={styles.missPostImage}
                />
                <View style={styles.missPostTextContainer}>
                  <Text style={styles.missPostText}>Missing Dog Bell</Text>
                  <Text style={styles.missPostTime}>8 minutes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.missPostContainer}>
                <Image
                  source={require("../assets/Found2.jpeg")}
                  style={styles.missPostImage}
                />
                <View style={styles.missPostTextContainer}>
                  <Text style={styles.missPostText}>Candy is Missing!!!</Text>
                  <Text style={styles.missPostTime}>12 minutes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.missPostContainer}>
                <Image
                  source={require("../assets/Found3.webp")}
                  style={styles.missPostImage}
                />
                <View style={styles.missPostTextContainer}>
                  <Text style={styles.missPostText}>Oreo disappeared...</Text>
                  <Text style={styles.missPostTime}>50 minutes</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    backgroundColor: Colours.primary,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "20%",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: "20%",
  },
  contentContainer: {
    paddingBottom: 16,
    alignItems: "center",
  },
  picture_1: {
    borderRadius: 10,
    width: 400,
    height: 250,
    marginBottom: 16,
  },
  rectangle: {
    backgroundColor: "#FDBD4E",
    borderRadius: 10,
    width: 400,
    height: 120, // Adjusted height to cover rect_text and timer_text
    justifyContent: "center", // Added to center the text vertically
    paddingHorizontal: 16, // Added padding around the text
  },
  rect_text: {
    fontSize: 36,
    fontWeight: "600",
    color: "#2D384C",
  },
  timer_text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2D384C",
    marginTop: 2,
  },
  missing_post_text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2D384C",
  },
  missingPostsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  missPostContainer: {
    marginRight: 8,
  },
  missPostImage: {
    borderRadius: 10,
    width: 200,
    height: 150,
  },
  missPostTextContainer: {
    backgroundColor: "#2D384C",
    borderRadius: 10,
    width: 200,
    padding: 8,
  },
  missPostText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  missPostTime: {
    fontSize: 12,
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: 4,
  },
});
