import React, { FunctionComponent } from "react";
import "./Shef.css"



export const Shef: FunctionComponent = ({}) => {
    return (
        <>
                <div className="shef">
                    <form action="" className="recipe_form">
                        <div className="form-group">
                        <label htmlFor="" className="label_form">Name</label><br />
                        <input type="text" className="input_form form-control"/><br />

                        <label htmlFor="" className="label_form">Photo</label><br />
                        <input className="form-control form-control-sm" id="formFileSm" type="file"/><br />

                        <label htmlFor="" className="label_form">Description</label><br />
                        <textarea name="" id="" className="input_form form-control"></textarea><br />

                        <label htmlFor="" className="label_form">Step</label><br />
                        <input type="text" className="input_form form-control"/><br />
                        <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                        </div>
                    </form>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Add step</button>
                <button type="button" className="btn btn-secondary">Cooking</button>
                </div>
                </div>
            </>
    )
}
