import React from 'react'
import { StyleSheet } from 'react-native'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

// import from my file
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/mealsReducer'

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

export default function App() {
  return <Provider store={store}><MealsNavigator /></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});