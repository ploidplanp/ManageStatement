import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

// import from my file
import MealList from '../components/MealList'


const FavoritesScreen = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    const favMeals = favoriteMeals.filter((meal) => meal.id)

    return ( 
        <MealList
            listData = { favMeals }
            navigation = { props.navigation }
        />
    );
};


FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your Favorites'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavoritesScreen;