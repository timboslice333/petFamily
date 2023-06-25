import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colours from "../constants/colors";
import { AntDesign } from '@expo/vector-icons';
import { m1, m2, m3, f1, f2, f3 } from "../components/Images";

export const PostsScreen = ({ route, navigation }) => {
  
  const { isNew, post } = route.params;
    const postDateTime = isNew? new Date().toLocaleString() : post.time;

    const getImage = () => {
      switch (post.id) {
        case 1: return <Image
        source={f3}
        style={styles.photo}
      />
        case 2: return <Image
        source={f2}
        style={styles.photo}
      /> 
        case 3: return <Image
        source={f1}
        style={styles.photo}
      />
        case 4: return <Image
        source={m1}
        style={styles.photo}
      />
        case 5: return <Image
        source={m2}
        style={styles.photo}
      />
        case 6: return <Image
        source={m3}
        style={styles.photo}
      />
      }

    }
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={styles.backIcon}>
            <AntDesign name="arrowleft" size={30} color={Colours.primary_variant} />
            </View>
          </TouchableOpacity>
          {isNew? <Text style={styles.title}>Your Post</Text>: <Text style={styles.ntitle}>petSOS</Text>}
          
        </View>
      {isNew? <Image
        source={{ uri: post.imageUrl }}
        style={styles.photo}
      /> : getImage()}
        <View style={styles.postDateTimeSection}>
          <Text style={styles.time}>{postDateTime}</Text>
        </View>
        <View style={styles.textEntryContainer}>
        {post.found? <View><Text style={styles.label}>Breed : </Text>
        <Text style={styles.text}>{post.breed}</Text></View> : <View><Text style={styles.label}>Pet Name : </Text>
        <Text style={styles.text}>{post.name}</Text></View>
        }
        <Text style={styles.label}>Last Seen Location: </Text>
        <Text style={styles.text}>{post.location}</Text>
        <Text style={styles.label}>Notes: </Text>
        <Text style={styles.text}>{post.notes}</Text>
        {isNew && <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Map");
        }}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        </View>}
       </View>
      </View>
    );
  };
  
  

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photo: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderWidth: 10,
    borderRadius:30,
    borderColor: Colours.primary,
    position: "absolute",
    marginTop:120
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
    height: 100,
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
  ntitle: {
    marginTop: 20,
    padding: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 70,
    color: Colours.primary_variant,
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:30,
    color: Colours.primary_variant
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postDateTimeSection: {
    marginBottom: 20,
    alignSelf: 'center',
    marginTop:400
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textEntryContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:30
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 6,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: 'white',
  },
  largeInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  tagsSection: {
    marginBottom: 50,
  },
  button: {
    width: '40%',
    backgroundColor: Colours.primary,
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 8,
    color: Colours.primary_variant,
    fontSize: 20,
  }
});