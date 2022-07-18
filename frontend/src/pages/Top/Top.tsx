import React, { useEffect } from "react";
import "./Top.css"
import image from "../../pages/Screenshot_1.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { FetchTopRecipes } from "../../store/reducers/ActionRecipes";
import { Link, NavLink } from "react-router-dom";


const Top: React.FC = ({}) => {

  const dispatch = useAppDispatch()
  const {top_recipes, isLoading, error} = useAppSelector(state => state.TopRecipesReducer)

  useEffect(() => {
    dispatch(FetchTopRecipes())
  }, [])

  return (
      <>
        <div className="recipes">
  {top_recipes.map(recipe =>
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
            <img src={image} alt="" className="like" />
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

  export default Top;