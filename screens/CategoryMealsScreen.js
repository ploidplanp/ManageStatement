import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

// import from my file
import { CATEGORIES } from '../data/dummy-data'
import MEALS from '../store/reducers/mealsReducer'
import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {

  const catId = props.navigation.getParam('id');

  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList
        listData={displayedMeals}
        navigation={props.navigation}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('id')

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
