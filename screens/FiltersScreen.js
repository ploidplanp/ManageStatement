import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton'

const FiltersScreen = (props) => {
  // set state
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  // set toggle switch when value change
  const toggleGluten = () => setIsGlutenFree(!isGlutenFree);
  const toggleLactose = () => setIsLactoseFree(!isLactoseFree);
  const toggleVegan = () => setIsVegan(!isVegan);
  const toggleVegetarian = () => setIsVegetarian(!isVegetarian);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <View style={styles.filterContainer}>
        <Text>Gluten-Free</Text>
        <Switch
          trackColor={{ false: "#394867", true: "#9ab3f5" }}
          thumbColor={isGlutenFree ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleGluten}
          value={isGlutenFree}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>Lactose-Free</Text>
        <Switch
          trackColor={{ false: "#394867", true: "#9ab3f5" }}
          thumbColor={isLactoseFree ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleLactose}
          value={isLactoseFree}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ false: "#394867", true: "#9ab3f5" }}
          thumbColor={isVegan ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVegan}
          value={isVegan}
        />
      </View>
      
      <View style={styles.filterContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ false: "#394867", true: "#9ab3f5" }}
          thumbColor={isVegetarian ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVegetarian}
          value={isVegetarian}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-list"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {

            }}
          />
        </HeaderButtons>
      );
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
