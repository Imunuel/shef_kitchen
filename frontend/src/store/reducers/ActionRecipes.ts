import axios from "../../axios";
import { IDetailRecipe, ISearchRecipes, IShortRecipes, IMenuRecipes } from "../../models/models";
import { AppDispatch } from "../store";
import { detailRecipeSlice } from "./slices/DetailRecipeSlice";
import { favoriteRecipesSlice } from "./slices/FavoriteRecipesSlice";
import { menuRecipesSlice } from "./slices/MenuRecipesSlice";
import { searchRecipesSlice } from "./slices/SearchRecipesSlice";
import { topRecipeSlice } from "./slices/TopRecipesSlice";

export const FetchTopRecipes = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(topRecipeSlice.actions.topRecipesFething())
        const response = await axios.get<IShortRecipes[]>("recipes/get_top_recipes/")
        dispatch(topRecipeSlice.actions.topRecipesFethingSuccess(response.data))

    }
    catch(e){
        dispatch(topRecipeSlice.actions.topRecipesFethingError("ошибка"))
    }
}


export const FetchFavoriteRecipes = (username: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(favoriteRecipesSlice.actions.favoriteRecipesFething())
        const response = await axios.get<IShortRecipes[]>(`recipes/get_favorite_recipes/?username=${username}`)
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


export const FetchSearchRecipes = (parameter: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(searchRecipesSlice.actions.searchRecipesFething())
        const response = await axios.get<ISearchRecipes[]>(`recipes/get_recipes/?parameter=${parameter}`)
        dispatch(searchRecipesSlice.actions.searchRecipesFethingSuccess(response.data))
    }
    catch(e){
        dispatch(searchRecipesSlice.actions.searchRecipesFethingError("ошибка"))
    }
}


export const FetchMenuRecipes = (type: string, categories: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(searchRecipesSlice.actions.searchRecipesFething())
        const response = await axios.get<ISearchRecipes[]>(`recipes/get_recipes_by_categories/?type=${type}&categories=${categories}`)
        dispatch(searchRecipesSlice.actions.searchRecipesFethingSuccess(response.data))
    }
    catch(e){
        dispatch(searchRecipesSlice.actions.searchRecipesFethingError("ошибка"))
    }
}