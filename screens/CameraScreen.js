import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Storage } from '@aws-amplify/storage';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import FlipCameraIcon from '../assets/icons/Flip camera ios.svg';
import GridIcon from '../assets/icons/Grid on.svg';
import FlashOnIcon from '../assets/icons/mdi_flash_on.svg';
import FlashOffIcon from '../assets/icons/Flash off.svg';
import UploadPhotoIcon from '../assets/icons/Photo library.svg';
import Colours from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';


export const CameraScreen = ({route}) => {
  const {found} = route.params;
  const navigation = useNavigation();

  const cameraRef = useRef(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasPhotoPermission, setHasPhotoPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [grid, setGrid] = useState(false);
  const [elementHeight, setElementHeight] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    (async () => {
      const mediaStatus = await MediaLibrary.requestPermissionsAsync();
      setHasPhotoPermission(mediaStatus.status === 'granted');
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
        Promise.all([saveImage(), navigateToNextPage(data.uri)]);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        // Send to S3
        var split = image.split('/');
        const imageKey = split[split.length - 1];
        try {
          const response = await fetch(image);
          const blob = await response.blob();
          await Storage.put(imageKey, blob, {
            level: 'protected',
            contentType: 'image/jpeg',
          });
          console.log(imageKey, 'uploaded successfully');
        } catch (err) {
          console.log('Error uploading file:', err);
        }

        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const navigateToNextPage = (imageUri) => {
    navigation.navigate('LostAndFound', { imageUri, found: found });
  };


  const uploadPhoto = async () => {
    if (hasPhotoPermission) {
      const options = {
        mediaType: 'photo', // specify the media type to allow only images
        quality: 1, // image quality (0 to 1)
      };
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        try {
          setImage(result.assets[0].uri);
          Promise.all([saveImage(), navigateToNextPage(result.assets[0].uri)]);
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      alert('does not have photo permission');
    }
  };

  if (hasCameraPermission === false || !hasCameraPermission) {
    return <Text>No access to the camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={styles.backIcon}>
            <AntDesign name="arrowleft" size={30} color='white' />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>petSOS</Text>
        </View>
      <Camera
      style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
        onLayout={(event) => {
          const { height, width } = event.nativeEvent.layout;
          setElementHeight(height);
          setElementWidth(width);
        }}
      >
        <View
    style={{
      flex: 1,
      backgroundColor: 'transparent',
    }}
  >{grid && (
    <View style={{position: 'absolute',
    width: elementWidth,
    height: elementHeight,}}>
    <View style={styles.row}>
      <View style={[styles.cell, styles.outerCell]} />
      <View style={[styles.cell, styles.colCell]} />
      <View style={[styles.cell, styles.outerCell]} />
    </View>
    <View style={styles.row}>
      <View style={[styles.cell, styles.rowCell]} />
      <View style={styles.cell} />
      <View style={[styles.cell, styles.rowCell]} />
    </View>
    <View style={styles.row}>
      <View style={[styles.cell, styles.outerCell]} />
      <View style={[styles.cell, styles.colCell]} />
      <View style={[styles.cell, styles.outerCell]} />
    </View>
  </View>
    )}
  </View>
      </Camera>
      <View style={{ backgroundColor: Colours.primary, height: 338 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 75.33,
            marginTop: 50,
          }}
        >
          <TouchableOpacity onPress={() => {
                setGrid(
                  !grid
                );
              }}>
          <GridIcon
              width="30"
              height="30"
            />
		</TouchableOpacity>
          <TouchableOpacity onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}>
                {
                  flash === Camera.Constants.FlashMode.off?
                  <FlashOffIcon
                  width="30"
                  height="30"
                  /> :
                  <FlashOnIcon
                    width="30"
                    height="30"
                  />
                }

            </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
            marginTop: 111.67
          }}
        >
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <TouchableOpacity onPress={uploadPhoto}>
              <UploadPhotoIcon
              width="30"
              height="30"/>
            </TouchableOpacity>
            <Text style={styles.text}>IMPORT IMAGE</Text>
          </View>

          <TouchableOpacity
            style={styles.captureButton}
            onPress={takePicture}
            activeOpacity={0.7}
          ></TouchableOpacity>
          <View style={{ alignItems: 'center',marginTop: 16 }}>
          <TouchableOpacity onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
          <FlipCameraIcon
              width="30"
              height="30"
            />
		</TouchableOpacity>
    <Text style={styles.text}>FLIP CAMERA</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.primary,
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 10,
    position: 'relative',
    marginTop: 45,
  },
  backIcon: {
    marginTop: 40,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 50,
    marginTop: 40,
    flex: 1,
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'cover',
  },
  customBtnBG: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: 428,
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  button: {
		height: 40,
		flexDirection: 'row',
	},
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: 'white',
  },
  outerCell: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  rowCell: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  colCell: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  banner: {
    backgroundColor: Colours.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: 16,
    height: 100,
  },
  title: {
    marginTop: 20,
    padding: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 70,
    color: 'white',
  },
});
