import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/mealsAction'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            console.log("fav: ", state.favoriteMeals)
            const selectedMealId = action.mealId
            const check = state.favoriteMeals.findIndex((meal) => {
                return meal.id == selectedMealId
            })
            console.log('check: ', check)
            if (check >= 0) {
                // already in favoriteMeals
                const updateState = [...state.favoriteMeals]
                updateState.splice(check, 1)
                return {...state, favoriteMeals: updateState }
            } else {
                // not in favoriteMeals -1
                const updateState = state.meals.find((meal) => {
                    return (meal.id == selectedMealId)
                })
                return {...state, favoriteMeals: state.favoriteMeals.concat(updateState) }
            }
        default:
            return {...state }
    }
}

export default mealReducer