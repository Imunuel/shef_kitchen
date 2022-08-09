import cookie from 'cookiejs'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import {
    DeleteProfileRecipes,
    FetchProfileRecipes,
} from '../../store/reducers/ActionRecipes'

export const ProfileRecipes: React.FC = ({}) => {
    const dispatch = useAppDispatch()

    const { profile_recipes, isLoading, error } = useAppSelector(
        (state) => state.ProfileRecipesReducer
    )
    useEffect(() => {
        dispatch(FetchProfileRecipes(cookie.get('username').toString()))
    }, [])

    async function DeleteRecipe(id: string) {
        dispatch(DeleteProfileRecipes(id))
    }

    return (
        <>
            <div className="recipes">
                {profile_recipes.map((recipe) => (
                    <div className="recipe" key={recipe.id}>
                        <div className="numbered_recipe profile_recipe">
                            <NavLink to={`/shef/recipe/${recipe.id}`}>
                                <img
                                    src={recipe.photo}
                                    alt=""
                                    className="recipe_photo"
                                />
                            </NavLink>
                            <div className="recipe_data">
                                <div className="recipe_name">{recipe.name}</div>
                                <div className="other_data">
                                    <div className="author"></div>
                                    <div className="likes">
                                        <div className="count">
                                            {recipe.count_likes}
                                        </div>
                                        <img src={''} alt="" className="like" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-secondary delete_btn"
                            onClick={DeleteRecipe.bind(this, recipe.id)}
                        ></button>
                    </div>
                ))}
            </div>
        </>
    )
}
