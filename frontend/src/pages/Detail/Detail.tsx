import React, { useEffect } from "react";
import "./Detail.css"
import image from "../../pages/Screenshot_1.png";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { FetchDetailRecipe } from "../../store/reducers/ActionRecipes";




export function Detail (){

    const params = useParams<{"id": string}>()

    const dispatch = useAppDispatch()
    const {detail_recipe, isLoading, error} = useAppSelector(state => state.DetailRecipeReducer)
  
    useEffect(() => {
      dispatch(FetchDetailRecipe(params.id))
    }, [])

    return(
        <>
            {detail_recipe.map(recipe =>
            <div className="current_recipe" key={recipe.id}>
            <div className="information">
                <img src={recipe.photo} alt="" className="current_photo"/>
                <div className="text_data">
                    <div className="current_name">{recipe.name}</div>
                    <div className="current_description">{recipe.description}</div>
                    <div className="other_data">
                    <div className="author">Author: {recipe.author}</div>
                    <div className="likes">
                    <div className="count">{recipe.count_likes}</div>
                    <img src={image} alt="" className="like" />
                    </div>
                    </div>
                </div>
            </div>
            {recipe.steps.map(step =>
            <div className="step">
                <div className="step_data">
                <div className="step_number">{}</div>
                <div className="step_description">{step[0]}</div>
                </div>
                <div className="step_photo"><img src={step[1]} alt="" /></div>
            </div>
            )}

            <div className="categories">
            {recipe.categories.map(category =>
                <div className="category">{category}</div>
                )}
            </div>
            <div className="add_to_favorite">
                <button className="button">Избранное</button>
            </div>
        </div>
        )}
        </>
    )
}
