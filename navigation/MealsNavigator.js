import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import FavoritesScreen from '../screens/FavoritesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';

const MealsNavigator = createStackNavigator({
    // RouteConfigs
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: { screen: MealDetailScreen },
}, {
    // defaultNavigationOptions
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
    }
});

const FavNavigator = createStackNavigator({
    // RouteConfigs
    Favorites: { screen: FavoritesScreen },
    MealDetail: { screen: MealDetailScreen }
}, {
    // NavigationConfig
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    // RouteConfigs
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return ( < MaterialCommunityIcons name = "food-variant"
                    size = { 24 }
                    color = "lightblue" />
                );
            }
        }
    },
    Favorits: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return ( < MaterialIcons name = "favorite"
                    size = { 24 }
                    color = "lightblue" />
                );
            },
        }
    }
});

const FiltersNavigator = createStackNavigator({
    // RouteConfigs
    Filters: { screen: FiltersScreen }
}, {
    // NavigationConfig
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
    }
});

const MainNagivator = createDrawerNavigator({
    // RouteConfigs
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals",
            drawerIcon: () => {
                return (<MaterialCommunityIcons name="food" size={24} color="#14274e" />);
            }
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: "Meals",
            drawerIcon: () => {
                return (<MaterialCommunityIcons name="filter" size={24} color="#14274e" />);
            }
        }
    }
},{
    // NavigationConfig
    contentOptions: { activeTintColor: "#4a148c" }
});

export default createAppContainer(MainNagivator);