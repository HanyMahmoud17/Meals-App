import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetails/Subtitle";
import List from "../components/mealDetails/List";
import Iconbutton from "../components/Iconbutton";

const MealDetailsScreen = ({ route,navigation }) => {
  const mealId = route.params.mealId;

  const mealItem = MEALS.find((meal) => meal.id === mealId);

  function pressedHandler(){
    
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>{
        return <Iconbutton icon='star' color="white" onPress={pressedHandler}/>
      }
    })
  },[]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.img} source={{ uri: mealItem.imageUrl }} />
        <View style={styles.mainText}>
          <Text style={styles.mainTextStyle}>{mealItem.title}</Text>
        </View>
        <MealDetails
          complexity={mealItem.complexity}
          affordability={mealItem.affordability}
          duration={mealItem.duration}
          textStyle={styles.detailsColor}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={mealItem.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={mealItem.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 250,
  },
  mainText: {
    margin: 8,
    padding: 8,
  },
  mainTextStyle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  detailsColor: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
