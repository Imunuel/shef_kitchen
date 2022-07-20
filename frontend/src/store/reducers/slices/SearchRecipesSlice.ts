import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISearchRecipes } from "../../../models/models"

interface SearchRecipesState {
    search_recipes: ISearchRecipes[],
    isLoading: boolean,
    error: string
}

const initialState: SearchRecipesState = {
    search_recipes: [],
    isLoading: false,
    error: ""
}

export const searchRecipesSlice = createSlice({
    name: "search_recipes",
    initialState,
    reducers: {
        searchRecipesFething(state){
            state.isLoading = true
        },
        searchRecipesFethingSuccess(state, action: PayloadAction<ISearchRecipes[]>){
            state.isLoading = false
            state.error = ""
            state.search_recipes = action.payload
        },
        searchRecipesFethingError(state, action: PayloadAction<string>){
        state.isLoading = false
        state.error = action.payload
        }  
        }
    })

export default searchRecipesSlice.reducer