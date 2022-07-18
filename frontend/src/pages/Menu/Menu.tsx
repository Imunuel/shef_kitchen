import React, { FunctionComponent } from "react";
import "./Menu.css"
import image from "../../pages/Screenshot_1.png"


export const Menu: FunctionComponent = ({}) => {
  return (
    <>
                <div className="random_recipes">
                    <div className="count_parameters">
                        <div className="count_parameter">random recipe<input type="radio" name="count_parameter" className="radio"/></div>
                        <div className="count_parameter">week menu<input type="radio" name="count_parameter" className="radio"/></div>
                        <div className="count_parameter">day menu<input type="radio" name="count_parameter" className="radio"/></div>
                    </div>
                    <button className="find">find</button>
                    <div className="position_parameters">
                        <div className="position_parameter"><input type="checkbox"/>breakfast</div>
                        <div className="position_parameter"><input type="checkbox"/>dinner</div>
                        <div className="position_parameter"><input type="checkbox"/>evening meal</div>
                    </div>
                </div>


                <div className="recipes">
          <div className="recipe">
            <div className="number"></div>
            <div className="numbered_recipe">
            <a href=""><img src={image} alt="" className="recipe_photo" /></a>
              <div className="recipe_data">
                <div className="recipe_name">
                  Вкусная курочка, которая понравится каждому
                </div>
                <div className="other_data">
                  <div className="score">score: 2,15</div>
                  <div className="likes">
                    <div className="count">15</div>
                    <img src={image} alt="" className="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            </>
  )
}
