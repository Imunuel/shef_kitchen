import cookie from "cookiejs";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "../../pages/Screenshot_1.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { FetchFavoriteRecipes } from "../../store/reducers/ActionRecipes";
import { Like } from "../Like";
import "./Favorite.css";


export const Favorite: React.FC = ({}) => {

  const dispatch = useAppDispatch()

  const {favorite_recipes, isLoading, error} = useAppSelector(state => state.FavoriteRecipesReducer)

  useEffect(() => {
    dispatch(FetchFavoriteRecipes(cookie.get("username").toString()))
  }, [])

  return (
    <>
        <div className="recipes">

          {favorite_recipes.map(recipe => 
          <div className="recipe" key={recipe.id}>
            <div className="numbered_recipe">
              <NavLink to={`/shef/recipe/${recipe.id}`}><img src={recipe.photo} alt="" className="recipe_photo" /></NavLink>
              <div className="recipe_data">
                <div className="recipe_name">
                  {recipe.name}
                </div>
                <div className="other_data">
                    <div className="author">Author: {recipe.author}</div>
                    <div className="likes">
                    <div className="count">{recipe.count_likes}</div>
                    <Like likes={recipe.likes} id={recipe.id}/>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        )}
          
        </div>
      </>
  )
}
