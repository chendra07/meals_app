import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect, useContext, useEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../store/redux/slices/favorites_slices";

const MealDetailScreen = ({ route, navigation }) => {
  const { addFavorite, removeFavorite } = favoriteActions;

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  let mealIsFavorite = favoriteMealIds.includes(mealId);

  // let favoriteMealsCtx = useContext(FavoritesContext);
  // let mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite == true) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(
        removeFavorite({
          id: mealId,
        })
      );
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(
        addFavorite({
          id: mealId,
        })
      );
    }
  };

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [mealId, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          textStyle={styles.detailText}
          // style={}
        />
        <View style={styles.detailContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screenContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#e2b497",
  },
  detailText: {
    color: "#e2b497",
  },
  detailContainer: {
    marginHorizontal: 24,
  },
});
