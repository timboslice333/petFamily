import { View, StyleSheet } from "react-native";
import Tag from "./Tag";
import Colours from "../constants/colors";

export const Tags = ({ onSelectionChange, activeTag }) => {
  function handleOnPress(formattedName) {
    if (formattedName !== activeTag) {
      onSelectionChange(formattedName);
    }
  }

  return (
    <View style={styles.tagContainer}>
      <Tag onPress={handleOnPress} name="All" currentActiveTag={activeTag} />
      <Tag
        onPress={handleOnPress}
        name="Lost Pets"
        currentActiveTag={activeTag}
      />
      <Tag
        onPress={handleOnPress}
        name="Found Pets"
        currentActiveTag={activeTag}
      />
      <Tag onPress={handleOnPress} name="Breed" currentActiveTag={activeTag} />
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: Colours.secondary,
    marginBottom: 10,
    flexDirection: "row",
    paddingVertical: 3,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    width: 350,
  },
});
