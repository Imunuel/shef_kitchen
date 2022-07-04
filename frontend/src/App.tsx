import React from 'react';
import './App.css';
import Header from './components/header/Header';
import "./components/Favorite/Favorite.css";
import image from "./components/Screenshot_1.png"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">


        <div className="recipes">

          <div className="recipe">
            <div className="number">1</div>
            <div className="numbered_recipe">
              <img src={image} alt="" className='recipe_photo'/>
              <div className="recipe_data">
                <div className="description">Вкусная курочка, которая понравится каждому</div>
                <div className="other_data">
                  <div className="score">score: 2,15</div>
                  <div className="likes">
                    <div className="count">15</div>
                    <img src={image} alt="" className='like'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe">
            <div className="number">2</div>
            <div className="numbered_recipe">
              <img src={image} alt="" className='recipe_photo'/>
              <div className="recipe_data">
                <div className="description">Суп харчо освежает лечом. Приготовить легко, почти без заморочек, хватит и 5 минут</div>
                <div className="other_data">
                  <div className="score">score: 1,5</div>
                  <div className="likes">
                    <div className="count">157</div>
                    <img src={image} alt="" className='like'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe">
            <div className="number">3</div>
            <div className="numbered_recipe">
              <img src={image} alt="" className='recipe_photo'/>
              <div className="recipe_data">
                <div className="description">Суп харчо освежает лечом. Приготовить легко, почти без заморочек, хватит и 5 минут</div>
                <div className="other_data">
                  <div className="score">score: 1,5</div>
                  <div className="likes">
                    <div className="count">157</div>
                    <img src={image} alt="" className='like'/>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>
  );
}

export default App;
