import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IDetailRecipe } from "../../../models/models"

interface DetailRecipesState {
    detail_recipe: IDetailRecipe[],
    isLoading: boolean,
    error: string
}

const initialState: DetailRecipesState = {
    detail_recipe: [],
    isLoading: false,
    error: ""
}

export const detailRecipeSlice = createSlice({
    name: "detail_recipe",
    initialState,
    reducers: {
        detailRecipeFething(state){
            state.isLoading = true
        },
        detailRecipeFethingSuccess(state, action: PayloadAction<IDetailRecipe[]>){
            state.isLoading = false
            state.error = ""
            state.detail_recipe = action.payload
        },
        detailRecipeFethingError(state, action: PayloadAction<string>){
        state.isLoading = false
        state.error = action.payload
        }  
        }
    })

export default detailRecipeSlice.reducer