import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TopRecipesReducer from "./reducers/slices/TopRecipesSlice"
import FavoriteRecipesReducer from "./reducers/slices/FavoriteRecipesSlice"
import DetailRecipeReducer from "./reducers/slices/DetailRecipeSlice"

const rootReducer = combineReducers({
    TopRecipesReducer,
    FavoriteRecipesReducer,
    DetailRecipeReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']