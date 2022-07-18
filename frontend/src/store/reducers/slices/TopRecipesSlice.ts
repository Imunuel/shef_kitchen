import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITopRecipes } from "../../../models/models"

interface TopRecipesState {
    top_recipes: ITopRecipes[],
    isLoading: boolean,
    error: string
}

const initialState: TopRecipesState = {
    top_recipes: [],
    isLoading: false,
    error: ""
}

export const topRecipeSlice = createSlice({
    name: "top_recipes",
    initialState,
    reducers: {
        topRecipesFething(state){
            state.isLoading = true
        },
        topRecipesFethingSuccess(state, action: PayloadAction<ITopRecipes[]>){
            state.isLoading = false
            state.error = ""
            state.top_recipes = action.payload
        },
        topRecipesFethingError(state, action: PayloadAction<string>){
        state.isLoading = false
        state.error = action.payload
        }  
        }
    })

export default topRecipeSlice.reducer