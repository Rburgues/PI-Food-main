import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react';
import { createRecipe, dietsList, resetData } from "../../Redux/action"
import s from './CreateRecipe.module.css'
import NavVacia from '../NavVacia/NavVacia.jsx'


function validate(input) {
    let errors = {};
    input.name
        ? (errors.name = "")
        : (errors.name = "You must name the recipe");
    input.summary
        ? (errors.summary = "")
        : (errors.summary = "You must provide a summary");
    input.steps
        ? (errors.steps = "")
        : (errors.steps = "You must provide an instruction");
    input.diets === 0
        ? (errors.diets = "Choose at least one diet")
        : (errors.diets = "");
    if (!input.healthScore) {
        errors.healthScore = 'You must provide a healthScore'
    } else if (input.healthScore > 100 || input.healthScore < 0) {
        errors.healthScore = 'The range must be between 1 and 100'
    }
    const imgValidate = /(https?:\/\/.*\.(?:png|jpg))/
    if (!input.image || !imgValidate.test(input.image)) {
        errors.image = 'Please insert an image type URL'
    } else {
        errors.image = "";
    }
    return errors;
}


export default function CreateRecipe() {

    let dispatch = useDispatch()
    const dietList = useSelector((state) => state.dietList);
    const [errors, setErrors] = useState({});
    let key = 1;
    let num = 1;


    const [input, setInput] = useState(
        {
            name: "",
            summary: "",
            image: "",
            healthScore: 0,
            steps: [],
            diets: []
          
        }
    )

    function handleChange(e) {
        setInput((input) => ({
            ...input,
            [e.target.name]: e.target.value,
        }));
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleAddStep(e) {
        if (e.target.value == "") {

            alert('Enter almost one step')

        } else {
            setInput((input) => ({
                ...input,
                steps: [...input.steps,
                {
                    number: input.steps.length + 1,
                    step: e.target.value
                }
                ],
            }));

        }
    }

    function handleSelect(e) {
        if (input.diets?.includes(e.target.value)) {
            return 'Diet Type exists'
        } else {
            setInput((input) => ({
                ...input,
                diets: [...input.diets, e.target.value],
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name && input.summary&& input.image && input.healthScore) {
            dispatch(createRecipe(input))
            alert('Recipe created succesfully!')

            setInput({
                name: "",
                summary: "",
                image: "",
                healthScore: 0,
                steps: [],
                diets: []               
            })      
        } else {
            alert('Please complete all fields')
        }   
    }

    function handleDelete(e) {
        setInput({
            ...input,
            diets: input.diets.filter(dietList => dietList !== e)
        })
    }

    function handleDeletStep(e) {
        setInput({
            ...input,
            steps: input.steps.filter(dietList => dietList !== e)
        })
    }

    useEffect(() => {
        dispatch(dietsList())
    }, [dispatch])

    return (
        <div className={s.backCreate}>
            <NavVacia />

            <div className={s.formContainer}>

                <br></br>

                <h1 className={s.tituloCreateRecipe}> Create your Recipe </h1>
                <br></br>
            

                <form className={s.containerForm} onSubmit={(e) => handleSubmit(e)}>

                    <div className={s.titleForm}>
                        <label>
                            <span>Title: </span>
                            <input className={s.input} type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                            {errors.name && (
                                <p className={s.errorMsg}>{errors.name}</p>
                            )}
                        </label>
                    </div>
             

                    <div className={s.summaryForm}>
                        <label>
                            <div className={s.summaryTitle}>Summary: </div>
                            <textarea rows={4} className={s.textarea} type="text" name="summary" value={input.summary} onChange={(e) => handleChange(e)} />
                            {errors.summary && (
                                <p className={s.errorMsg}>{errors.summary}</p>
                            )}
                        </label>
                    </div>


                    <div className={s.imageForm}>
                        <label>
                            <span>Image: </span>
                            <input className={s.input} type="text" name="image" value={input.image} onChange={(e) => handleChange(e)} />
                            {errors.image && <p className={s.errorMsg}> {errors.image}</p>}
                        </label>
                    </div>

                  

                    <div className={s.dietsForm}>
                        <label>
                            <span>Diets: </span>

                            <select className={s.selectDiets} onChange={(e) => handleSelect(e)} type='option'>
                                {dietList?.map(el => (
                                    <option key={el} value={el}>{el}</option>
                                ))
                                }
                            </select>
                            {errors.diets && <p>{errors.diets}</p>}
                        </label>
                    </div>
                    <div className={s.dietsArray}>
                    <h3 className={s.dietsArrayTitle}>Diets List</h3>
                        {input.diets?.map(el =>
                            <div key={key++} className={s.dietsAdded}>
                                {el}<button className={s.btnDeleteDiet} onClick={(e) => handleDelete(el)}>X</button>
                            </div>
                        )}

                    </div>


                    <div className={s.healtForm}>
                        <label>
                            <span>HealthScore: </span>
                            <input className={s.healtInput} type="number" name="healthScore" value={input.healthScore} onChange={(e) => handleChange(e)} />
                            {errors.healthScore && (
                                <p className={s.errorMsg}>{errors.healthScore}</p>
                            )}
                        </label>
                    </div>


                    <div className={s.stepsForm}>
                        <label>

                            <span >Steps: (Double Click to Add Steps) </span>
                            <div >
                                <textarea className={s.stepInput} type="text" name="steps" value={input.steps[{}]} onDoubleClick={(e) => handleAddStep(e)} /></div>
                        </label>
                    </div>

                    <div className={s.stepsArray}>
                    <h3 className={s.stepArrayTitle}>Step by Step</h3>
                        {input.steps?.map(el =>
                            <div key={key++} className={s.stepsAdded}>
                                {num++}<span className={s.espacio}>{el.step}</span><div className={s.btnDeleteStep} onClick={() => handleDeletStep(el)} >Delete Step</div>
                            </div>
                        )}
                    </div>

                    <div className={s.btnSubmitForm}>
                        {<button className={s.btnCreateRecipe} type='submit'> Create Recipe</button>}
                    </div>
                </form>

               
            </div>

        </div >
    )


}