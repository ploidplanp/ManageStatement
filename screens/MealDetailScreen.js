import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, SafeAreaView } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = (props) => {
  const catId = props.navigation.getParam("id");
  const selectedMeals = MEALS.find((cat) => cat.id === catId);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.myScroll}>
        <ImageBackground
          source={{ uri: selectedMeals.imageUrl }}
          style={styles.bgImage}
        >
        </ImageBackground>

        <View style={styles.about}>
          <Text style={styles.myAboutText}>{selectedMeals.duration}</Text>
          <Text style={styles.myAboutText}>{selectedMeals.complexity.toUpperCase()}</Text>
          <Text style={styles.myAboutText}>{selectedMeals.affordability.toUpperCase()}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Ingredients</Text>
          {selectedMeals.ingredients.map((each, index) => (<Text style={styles.info}>- {each}</Text>))}
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Steps</Text>
          {selectedMeals.steps.map((each, index) => (<Text style={styles.info}>{index+1}. {each}</Text>))}
        </View>
        <Button
          title="Go Back to Categories"
          onPress={() => {
            props.navigation.navigate("Categories");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("id");
  const selectedMeals = MEALS.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedMeals.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-star"
            onPress={() => {

            }}
          />
        </HeaderButtons>
      );
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 20
  },
  myScroll: {
    marginHorizontal: 20
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  about: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10
  },
  myAboutText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  container: {
    margin: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  info: {
    margin: 5
  }
});

export default MealDetailScreen;
