import React from "react";
import "./Top.css"
import axios from "axios"
import image from "../../components/Screenshot_1.png";


// async () => {
//     const response = await axios.get("")
//    }

export default class Top extends React.Component {    
    render(): React.ReactNode {
        return (
            <div>
                <div className="recipes">
          <div className="recipe">
            <div className="number">1</div>
            <div className="numbered_recipe">
              <img src={image} alt="" className="recipe_photo" />
              <div className="recipe_data">
                <div className="recipe_name">
                  Вкусная курочка, которая понравится каждому
                </div>
                <div className="other_data">
                    <div className="author">Author: Roma</div>
                    <div className="likes">
                    <div className="count">15</div>
                    <img src={image} alt="" className="like" />
                    </div>
                    </div>
              </div>
            </div>
          </div>

          <div className="recipe">
            <div className="number">1</div>
            <div className="numbered_recipe">
              <img src={image} alt="" className="recipe_photo" />
              <div className="recipe_data">
                <div className="recipe_name">
                  Вкусная курочка, которая понравится каждому
                </div>
                <div className="other_data">
                    <div className="author">Author: Roma</div>
                    <div className="likes">
                    <div className="count">15</div>
                    <img src={image} alt="" className="like" />
                    </div>
                    </div>
              </div>
            </div>
          </div>

          <div className="recipe">
            <div className="number">1</div>
            <div className="numbered_recipe">
              <img src={image} alt="" className="recipe_photo" />
              <div className="recipe_data">
                <div className="recipe_name">
                  Вкусная курочка, которая понравится каждому
                </div>
                <div className="other_data">
                    <div className="author">Author: Roma</div>
                    <div className="likes">
                    <div className="count">15</div>
                    <img src={image} alt="" className="like" />
                    </div>
                    </div>
              </div>
            </div>
          </div>

        </div>
            </div>
        )
    }
}