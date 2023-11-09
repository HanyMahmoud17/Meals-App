import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const MealsItem = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) => {
  return (
    <View style={styles.screen}>
      <Pressable 
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed ? styles.btnPressed : null,
        ]}
      >
        <View style={styles.innerView}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.img} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.itemDetail}>{affordability}</Text>
            <Text style={styles.itemDetail}>{complexity}</Text>
            <Text style={styles.itemDetail}>{duration}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  screen: {
    margin: 24,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerView: {
    borderRadius: 8,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  btnPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  itemDetail: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
