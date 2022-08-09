import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TopRecipesReducer from './reducers/slices/TopRecipesSlice'
import FavoriteRecipesReducer from './reducers/slices/FavoriteRecipesSlice'
import DetailRecipeReducer from './reducers/slices/DetailRecipeSlice'
import SearchRecipesReducer from './reducers/slices/SearchRecipesSlice'
import MenuRecipesReducer from './reducers/slices/MenuRecipesSlice'
import ProfileRecipesReducer from './reducers/slices/ProfileRecipesSlice'
import ProfileReducer from './reducers/slices/ProfileSlice'

const rootReducer = combineReducers({
    TopRecipesReducer,
    FavoriteRecipesReducer,
    DetailRecipeReducer,
    SearchRecipesReducer,
    MenuRecipesReducer,
    ProfileRecipesReducer,
    ProfileReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
