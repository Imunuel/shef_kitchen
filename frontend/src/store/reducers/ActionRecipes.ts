import axios from "../../axios";
import { IDetailRecipe, IFavoriteRecipes, ITopRecipes } from "../../models/models";
import { AppDispatch } from "../store";
import { detailRecipeSlice } from "./slices/DetailRecipeSlice";
import { favoriteRecipesSlice } from "./slices/FavoriteRecipesSlice";
import { topRecipeSlice } from "./slices/TopRecipesSlice";

export const FetchTopRecipes = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(topRecipeSlice.actions.topRecipesFething())
        const response = await axios.get<ITopRecipes[]>("recipes/get_top_recipes/")
        dispatch(topRecipeSlice.actions.topRecipesFethingSuccess(response.data))

    }
    catch(e){
        dispatch(topRecipeSlice.actions.topRecipesFethingError("ошибка"))
    }
}


export const FetchFavoriteRecipes = (username: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(favoriteRecipesSlice.actions.favoriteRecipesFething())
        const response = await axios.get<IFavoriteRecipes[]>(`recipes/get_favorite_recipes/?username=${username}`)
        dispatch(favoriteRecipesSlice.actions.favoriteRecipesFethingSuccess(response.data))
    }
    catch(e){
        dispatch(favoriteRecipesSlice.actions.favoriteRecipesFethingError("Ошибка"))
    }
}


export const FetchDetailRecipe = (id: any) => async (dispatch: AppDispatch) => {
    try{
        dispatch(detailRecipeSlice.actions.detailRecipeFething())
        const response = await axios.get<IDetailRecipe[]>(`recipes/get_recipe_by_id/?id=${id}`)
        dispatch(detailRecipeSlice.actions.detailRecipeFethingSuccess(response.data))
    }
    catch(e){
        dispatch(detailRecipeSlice.actions.detailRecipeFethingError("Ошибка"))
    }
}