import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react';
import { createRecipe, dietsList } from "../../Redux/action"
import './CreateRecipe.css'
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

    const [input, setInput] = useState(
        {
            name: "",
            summary: "",
            image: "",
            healthScore: 0,
            steps: [
                {
                    number:0,
                    step:"",
                }
            ],
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
        if (input.steps.length > 0){       
            
            setInput((input) => ({
                ...input,
                steps: [
                    {
                        number: 1,
                        step: e.target.value
                    } 
                ],
            }));

        } else {     
            setInput((input) => ({
                ...input,
                steps: [...input.steps,
                    {
                        number:input.steps.length+1,
                        step: e.target.value
                    } 
                ],
            }));
            
        }
    }


    function handleSelect(e) {
        if (input.dietList?.includes(e.target.value)) {
            return 'Diet Type exists'
        } else {
            // console.log(e.target.value)
            // console.log(dietList)
            setInput((input) => ({
                ...input,
                diets: [...input.diets, e.target.value],
            }));
             
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
            
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name) {
            // console.log(input)
            dispatch(createRecipe(input))
            alert('Recipe created succesfully!')

        setInput({
            name: "",
            summary: "",
            image: "",
            healthScore: 0,
            steps: [
                {
                    number:0,
                    step:"",
                }
            ],
            diets: []

        })
    }else {
        alert('Please complete all fields')
    }

    }

    function handleDelete(e) {
        setInput({
            ...input,
            diets: input.diets.filter(dietList => dietList !== e)
        })
    }

    useEffect(() => {
        dispatch(dietsList())
    }, [dispatch])



    return (
        <div className='backCreate'>
            <NavVacia />

            <div className='formContainer'>

                <br></br>

                <h1 className="titulo"> Create your Recipe </h1>

                <br></br>

                <form className='containerForm' onSubmit={(e) => handleSubmit(e)}>
                    <label className="titleForm">
                        <span>Title: </span>
                        <input className="Input1" type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                        {errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </label>

                    <br></br>

                    <label className="summaryForm">
                        <span>Summary: </span>
                        <input className="textarea" type="text" name="summary" value={input.summary} onChange={(e) => handleChange(e)} />
                        {errors.summary && (
                            <p className="error">{errors.summary}</p>
                        )}
                    </label>

                    <br></br>

                    <label className="imageForm">
                        <span>Image: </span>
                        <input className="Input1" type="text" name="image" value={input.image} onChange={(e) => handleChange(e)} />
                        {errors.image && <p> {errors.image}</p>}
                    </label>

                    <br></br>

                    <label className="dietsForm">
                        <span>Diets: </span>

                        <select onChange={(e) => handleSelect(e)} type='option'>
                            <option value='ALLTYPE'> All Recipes </option>
                            {dietList?.map(el => (
                                <option key={el} value={el}>{el}</option>
                            ))
                            }
                        </select>
                        {errors.diets && <p>{errors.diets}</p>}

                        {input.diets?.map(el =>
                            <div key={el} className="dietasAgregadas">
                                 {el}<button className="btnDeleteDiet" onClick={() => handleDelete(el)}>X</button>
                            </div>
                        )}
                        {/* <div className="DietInput" onChange={(e) => handleSelect(e)}>
                            {TypeDiet1?.map((die) => (
                                <div key={die.name}>
                                    <input
                                        type="checkbox"
                                        name="diets"
                                        value={die.name}
                                    ></input>
                                    <label name={die}>{die.name}</label>
                                </div>))}
                        </div> */}

                    </label>

                    <br></br>

                    <label className="healthForm">
                        <span>HealthScore: </span>
                        <input className="Input1" type="number" name="healthScore" value={input.healthScore} onChange={(e) => handleChange(e)} />
                        {errors.healthScore && (
                            <p className="error">{errors.healthScore}</p>
                        )}
                    </label>

                    <br></br>

                    <label className="instructionsForm">
                        <span>Instructions: </span>
                        <input className="textarea" type="text" name="steps" value={input.steps[{}]} onChange={(e) => handleAddStep(e)} />
                    
                        {input.steps?.map(el =>
                            <div key={el} className="dietasAgregadas">
                                 {el.number} - <span>{el.step}</span><button className="btnDeleteStep" >Delete Step</button>
                            </div>
                        )}
                    
                    
                    </label>

                    <br></br>

                    {   <button type='submit'> Create Recipe</button>}

                </form>

                <div></div>
                <div></div>
            </div>

        </div>
    )


}