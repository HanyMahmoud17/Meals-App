import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

function CategoryTitle({ title, color }) {
  // console.log(title);
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTitle;

const styles = StyleSheet.create({});
