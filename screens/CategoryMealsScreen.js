import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList"

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    // return (
    //   <MealItem
    //     title={itemData.item.title}
    //     duration={itemData.item.duration}
    //     complexity={itemData.item.complexity}
    //     affordability={itemData.item.affordability}
    //     image={itemData.item.imageUrl}
    //     onSelectMeal={() => {
    //       props.navigation.navigate("MealDetail", {
    //         id: itemData.item.id,
    //       });
    //     }}
    //   />
    // );
  };

  const catId = props.navigation.getParam("id");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      {/* <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      /> */}
      <MealList
        listData={displayedMeals}
        navigation={props.navigation}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("id");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  console.log("selectedCategory: ", selectedCategory);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
