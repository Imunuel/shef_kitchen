import React, { ChangeEvent, FunctionComponent, useState } from "react";
import "./Menu.css"
import image from "../../pages/Screenshot_1.png"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { FetchSearchRecipes, FetchMenuRecipes } from "../../store/reducers/ActionRecipes";
import { NavLink } from "react-router-dom";
import { Like } from "../Like";


export const Menu: FunctionComponent = ({}) => {

  const {search_recipes} = useAppSelector(state => state.SearchRecipesReducer)
  // const {menu_recipes, isLoading, error} = useAppSelector(state => state.MenuRecipesReducer)

  const dispatch = useAppDispatch()

  const [input_value, setInputValue] = useState("")
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
}

  const [type_search, setTypeSearch] = useState("random")
  const radioChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTypeSearch(event.target.value)
  }

  const [categories, setCategories] = useState("")
  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const concated_value = event.target.value.concat(",")
    setCategories(categories.concat(concated_value)) 
  }

  const SeacrhInputFunction = () => {
    dispatch(FetchSearchRecipes(input_value))
  }
  const SearchParametersFunction = () => {
    dispatch(FetchMenuRecipes(type_search, categories))
  }


  return (
    <>
    <div className="search">
<input type="text" className="form-control" placeholder="Find your recipe" value={input_value} onChange={inputChangeHandler}/>
<button className="btn btn-secondary" onClick={SeacrhInputFunction}>Find</button>
</div>
                <div className="random_recipes">
                    <div className="count_parameters">
                        <div className="count_parameter">random recipe<input type="radio" name="count_parameter" className="radio" value={"random"} onChange={radioChangeHandler} checked/></div>
                        <div className="count_parameter">week menu<input type="radio" name="count_parameter" className="radio" value={"week"} onChange={radioChangeHandler}/></div>
                        <div className="count_parameter">day menu<input type="radio" name="count_parameter" className="radio" value={"day"} onChange={radioChangeHandler}/></div>
                    </div>
                    <button className="btn btn-secondary find" onClick={SearchParametersFunction}>find</button>
                    <div className="position_parameters">
                        <div className="position_parameter"><input className="inp" type="checkbox" value={"breakfast"} onChange={checkboxChangeHandler}/>breakfast</div>
                        <div className="position_parameter"><input className="inp" type="checkbox" value={"lunch"} onChange={checkboxChangeHandler}/>lunch</div>
                        <div className="position_parameter"><input className="inp" type="checkbox" value={"dinner"} onChange={checkboxChangeHandler}/>dinner</div>
                    </div>
                </div>


          <div className="recipes">
            {search_recipes?.map( recipe =>
          <div className="recipe" key={recipe.id}>
            <div className="number"></div>
            <div className="numbered_recipe">
            <NavLink to={`/shef/recipe/${recipe.id}`}><img src={recipe.photo} alt="" className="recipe_photo" /></NavLink>
              <div className="recipe_data">
                <div className="recipe_name">
                  {recipe.name}
                </div>
                <div className="other_data">
                  <div className="score">score: {recipe.score}</div>
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
