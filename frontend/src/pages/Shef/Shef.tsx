import React, { FunctionComponent } from "react";
import axios from "../../axios";
import { useAppDispatch } from "../../store/hooks/redux";
import { CreateRecipe } from "../../store/reducers/ActionRecipes";
import "./Shef.css"

let count = 2

const AddStep = () => {
    const label = document.createElement("label")
    label.className = "label_form"
    label.textContent = `Step ${count}`

    const br = document.createElement("br")

    const input_text = document.createElement("input")
    input_text.className = "input_form form-control"
    input_text.id = `step_text_${count}`

    const input_file = document.createElement("input")
    input_file.className = "form-control form-control-sm file_form"
    input_file.id = `step_file_${count}`
    input_file.type = "file"

    const form_div = document.getElementById("form_div")

    form_div?.appendChild(label)
    form_div?.appendChild(br)
    form_div?.appendChild(input_text)
    form_div?.appendChild(input_file)

    count += 1
    
}

export const Shef: FunctionComponent = ({}) => {
    const dispatch = useAppDispatch()
    const Cooking = () => {
    
        let step_texts = []
        let step_files = []
    
        const name = (document.getElementById("name") as HTMLInputElement)?.value
        const photo = (document.getElementById("photo") as HTMLInputElement).files as FileList
        const description = (document.getElementById("description") as HTMLInputElement)?.value

    
    
        for (let i=1; i<count; i++){
            step_texts.push((document.getElementById(`step_text_${i}`) as HTMLInputElement)?.value)
            step_files.push((document.getElementById(`step_file_${i}`) as HTMLInputElement).files) 
        }
        // dispatch(CreateRecipe(name, photo, description, step_texts, step_files))
        const fd = new FormData()
        fd.append("photo", photo[0], photo[0].name)
        console.log(fd)
        // axios.post("recipes/create_recipe/", {fd}).then(res => {console.log(res)})
    }

    return (
        <>
                <div className="shef">
                    <form action="" id="recipe_form" className="recipe_form">
                        <div id="form_div" className="form-group">
                        <label htmlFor="" className="label_form">Name</label><br />
                        <input type="text" id="name" className="input_form form-control"/><br />

                        <label htmlFor="" className="label_form">Photo</label><br />
                        <input className="form-control form-control-sm file_form" id="photo" type="file"/><br />

                        <label htmlFor="" className="label_form">Description</label><br />
                        <textarea name="" id="description" className="input_form form-control"></textarea><br />

                        <label htmlFor="" className="label_form">Step 1</label><br />
                        <input type="text" className="input_form form-control" id="step_text_1"/>
                        <input className="form-control form-control-sm file_form" id="step_file_1" type="file"/>
                        </div>
                    </form>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={AddStep}>Add step</button>
                <button type="button" className="btn btn-secondary" onClick={Cooking}>Cooking</button>
                </div>
                </div>
            </>
    )
}
