import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colours from "../constants/colors";

function Tag({ onPress, currentActiveTag, name }) {
  const formattedName = name.toLowerCase().trim(); // e.g. turn "Chronological" into "chronological"

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress(formattedName);
        }}
        style={
          currentActiveTag === formattedName ? styles.tagOn : styles.tagOff
        }
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tag;

const styles = StyleSheet.create({
  tagOff: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: Colours.primary,
    borderWidth: 2,
    backgroundColor: Colours.secondary,
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  tagOn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: Colours.primary,
    borderWidth: 2,
    backgroundColor: Colours.primary,
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 5,
  },
});
