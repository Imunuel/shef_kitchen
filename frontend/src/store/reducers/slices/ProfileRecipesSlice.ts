import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IShortRecipes } from '../../../models/models'

interface ProfileRecipesSlice {
    profile_recipes: IShortRecipes[]
    isLoading: boolean
    error: string
}

const initialState: ProfileRecipesSlice = {
    profile_recipes: [],
    isLoading: false,
    error: '',
}

export const profileRecipesSlice = createSlice({
    name: 'profile_recipes',
    initialState,
    reducers: {
        profileRecipesFething(state) {
            state.isLoading = true
        },
        profileRecipesFethingSuccess(
            state,
            action: PayloadAction<IShortRecipes[]>
        ) {
            state.isLoading = false
            state.error = ''
            state.profile_recipes = action.payload
        },
        profileRecipesFethingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default profileRecipesSlice.reducer
