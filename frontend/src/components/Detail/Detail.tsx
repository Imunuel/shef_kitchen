import React from "react";
import "./Detail.css"
import image from "../../components/Screenshot_1.png";

export default class Detail extends React.Component {
  render(): React.ReactNode {
    return <div>
        <div className="current_recipe">
            <div className="information">
                <img src={image} alt="" className="current_photo"/>
                <div className="text_data">
                    <div className="current_name">Текущее название рецепта</div>
                    <div className="current_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore numquam ipsum amet eum, accusamus tempore, corporis voluptatem atque soluta commodi, nobis ipsam officia. Nulla cum tempora nostrum perferendis modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi veritatis sequi exercitationem fuga tempore accusamus dolorem repudiandae ea quibusdam officia quaerat, odit quis dicta, enim harum nobis, nesciunt molestiae.</div>
                    <div className="other_data">
                    <div className="author">Author: Roma</div>
                    <div className="likes">
                    <div className="count">15</div>
                    <img src={image} alt="" className="like" />
                    </div>
                    </div>
                </div>
            </div>

            <div className="step">
                <div className="step_data">
                <div className="step_number">1</div>
                <div className="step_description">Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quaerat voluptate ea laudantium quod debitis aperiam recusandae deserunt odit atque! Doloremque a repellendus reiciendis! Libero reiciendis repellendus ullam obcaecati aliquam. dolor sit amet consectetur adipisicing elit. Quia, quos dicta iste aperiam consequuntur quae quibusdam rerum recusandae repellat deleniti qui provident fuga libero saepe magnam accusantium eum corrupti dolor!</div>
                </div>
                <div className="step_photo"><img src={image} alt="" /></div>
            </div>

            <div className="step">
                <div className="step_data">
                <div className="step_number">2</div>
                <div className="step_description">Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quaerat voluptate ea laudantium quod debitis aperiam recusandae deserunt odit atque! Doloremque a repellendus reiciendis! Libero reiciendis repellendus ullam obcaecati aliquam. dolor sit amet consectetur adipisicing elit. Quia, quos dicta iste aperiam consequuntur quae quibusdam rerum recusandae repellat deleniti qui provident fuga libero saepe magnam accusantium eum corrupti dolor!</div>
                </div>
                <div className="step_photo"><img src={image} alt="" /></div>
            </div>

            <div className="step">
                <div className="step_data">
                <div className="step_number">3</div>
                <div className="step_description">Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quaerat voluptate ea laudantium quod debitis aperiam recusandae deserunt odit atque! Doloremque a repellendus reiciendis! Libero reiciendis repellendus ullam obcaecati aliquam. dolor sit amet consectetur adipisicing elit. Quia, quos dicta iste aperiam consequuntur quae quibusdam rerum recusandae repellat deleniti qui provident fuga libero saepe magnam accusantium eum corrupti dolor!</div>
                </div>
                <div className="step_photo"><img src={image} alt="" /></div>
            </div>

            <div className="step">
                <div className="step_data">
                <div className="step_number">4</div>
                <div className="step_description">Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quaerat voluptate ea laudantium quod debitis aperiam recusandae deserunt odit atque! Doloremque a repellendus reiciendis! Libero reiciendis repellendus ullam obcaecati aliquam. dolor sit amet consectetur adipisicing elit. Quia, quos dicta iste aperiam consequuntur quae quibusdam rerum recusandae repellat deleniti qui provident fuga libero saepe magnam accusantium eum corrupti dolor!</div>
                </div>
                <div className="step_photo"><img src={image} alt="" /></div>
            </div>

            <div className="categories">
                <div className="category">Ужин</div>
                <div className="category">Мясо</div>
                <div className="category">Овощи</div>
                <div className="category">Морепродукты</div>
                <div className="category">Специи</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                <div className="category">Холодное</div>
                
            </div>
            <div className="add_to_favorite">
                <button className="button">Избранное</button>
            </div>
        </div>
    </div>;
  }
}
