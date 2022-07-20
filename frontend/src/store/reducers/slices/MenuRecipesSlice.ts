import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISearchRecipes } from "../../../models/models"

interface MenuRecipesSlice {
    menu_recipes: ISearchRecipes[],
    isLoading: boolean,
    error: string
}

const initialState: MenuRecipesSlice = {
    menu_recipes: [],
    isLoading: false,
    error: ""
}

export const menuRecipesSlice = createSlice({
    name: "menu_recipes",
    initialState,
    reducers: {
        menuRecipesFething(state){
            state.isLoading = true
        },
        menuRecipesFethingSuccess(state, action: PayloadAction<ISearchRecipes[]>){
            state.isLoading = false
            state.error = ""
            state.menu_recipes = action.payload
        },
        menuRecipesFethingError(state, action: PayloadAction<string>){
        state.isLoading = false
        state.error = action.payload
        }  
        }
    })

export default menuRecipesSlice.reducer