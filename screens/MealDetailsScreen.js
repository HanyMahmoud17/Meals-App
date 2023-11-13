import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetails/Subtitle";
import List from "../components/mealDetails/List";
import Iconbutton from "../components/Iconbutton";
import { FavoriteContext } from "../store/context/context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";

const MealDetailsScreen = ({ route, navigation }) => {
  // context
  // const favoriteMealsCTX = useContext(FavoriteContext);
  // console.log(favoriteMealsCTX.ids)

  // redux
  const favoriteMealsIds=useSelector((state)=> state.favoriteMeals.ids);
  // console.log(favoriteMealsIds);
  const dispatch=useDispatch();

  const mealId = route.params.mealId;
  const mealItem = MEALS.find((meal) => meal.id === mealId);

  // const selectedMeal = favoriteMealsCTX.ids.includes(mealId);
  const selectedMeal = favoriteMealsIds.includes(mealId);

  function ChangeFavoriteMealStatus() {
    if (selectedMeal) {
      // favoriteMealsCTX.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}))
    } else {
      // favoriteMealsCTX.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Iconbutton
            icon={selectedMeal ? "star" : "star-outline"}
            color="white"
            onPress={ChangeFavoriteMealStatus}
          />
        );
      },
    });
  }, [navigation, ChangeFavoriteMealStatus]);

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
