import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFavoriteRecipes } from "../../../models/models"

interface FavoriteRecipesState {
    favorite_recipes: IFavoriteRecipes[],
    isLoading: boolean,
    error: string
}

const initialState: FavoriteRecipesState = {
    favorite_recipes: [],
    isLoading: false,
    error: ""
}

export const favoriteRecipesSlice = createSlice({
    name: "favorite_recipes",
    initialState,
    reducers: {
        favoriteRecipesFething(state){
            state.isLoading = true
        },
        favoriteRecipesFethingSuccess(state, action: PayloadAction<IFavoriteRecipes[]>){
            state.isLoading = false
            state.error = ""
            state.favorite_recipes = action.payload
        },
        favoriteRecipesFethingError(state, action: PayloadAction<string>){
        state.isLoading = false
        state.error = action.payload
        }  
        }
    })

export default favoriteRecipesSlice.reducer