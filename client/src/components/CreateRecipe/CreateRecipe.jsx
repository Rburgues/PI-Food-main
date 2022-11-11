import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import { allRecipes, createRecipe, dietsList } from "../../Redux/action"
import './CreateRecipe.css'
import NavVacia from '../NavVacia/NavVacia.jsx'


function controlForm(input) {
    const reg = new RegExp('^[0-9]+$');
    const titleReg = new RegExp('/^[A-Z]+$', 'i');
    let errors = {}
    if (!input.title || titleReg.test(input.title)) errors.title = 'please put the title of the recipe'
    if (!input.summary) errors.summary = 'please put the summary of the recipe'

    if (input.healthScore < 0 || input.healthScore > 100 || !reg.test(input.healthScore)) errors.healthScore = 'put a healthScore between 0-100'
    return errors
}


export default function CreateRecipe() {


    let dispatch = useDispatch()
    const dietList = useSelector((state) => state.DietList);


    const [error, setError] = useState({})
    const [title, setTitle] = useState(
        {
            title: "",
            image: "",
            healthScore: 0,
            summary: "",
            analyzedInstructions: "",
            diets: []
        }
    )
    useEffect(() => {
        dispatch(createRecipe())
        dispatch(dietsList())
    }, [dispatch])

    function handleChange(e) {
        setTitle({
            ...title,
            [e.target.name]: e.target.value
        })
        setError(controlForm({
            ...title,
            [e.target.name]: e.target.value
        }))
    }
    function handleSelect(e) {
        setTitle({
            ...title,
            diets: [...title.diets, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!title.title) { return alert("please put the title of the recipe") }
        if (!title.summary) { return alert("please put the summary of the recipe") }
        if (!title.healthScore) { return alert("please put the healthScore of the recipe") }
        // dispatch(PostRecipe(title))
        dispatch(allRecipes())
        alert(`Recipe Created ${setTitle.name}`)

        setTitle({
            title: "",
            image: "",
            healthScore: 0,
            summary: "",
            analyzedInstructions: "",
            diets: []

        })

    }


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
                        <input className="Input1" type="text" name="title" value={title.title} onChange={handleChange} />
                        {error.title && (
                            <p className="error">{error.title}</p>
                        )}
                    </label>

                    <br></br>

                    <label className="imageForm">
                    <span>Image: </span>
                        <input className="Input1" type="text" name="image" value={title.image} onChange={handleChange} />

                    </label>

                    <br></br>

                    <label className="healthForm">
                    <span>HealthScore: </span>
                        <input className="Input1" type="number" name="healthScore" value={title.healthScore} onChange={handleChange} />
                        {error.healthScore && (
                            <p className="error">{error.healthScore}</p>
                        )}
                    </label>

                    <br></br>

                    <label className="summaryForm">
                    <span>Summary: </span>
                        <input className="textarea" type="text" name="summary" value={title.summary} onChange={handleChange} />
                        {error.summary && (
                            <p className="error">{error.summary}</p>
                        )}
                    </label>

                    <br></br>

                    <label className="dietsForm">
                    <span>Diets: </span>

                        <select onChange={(e) => handleSelect(e)} type='option'>
                            {dietList?.map(e =>
                                <option key={e} value={e} name="diets">{e}</option>)}
                        </select>


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

                    <label className="instructionsForm">
                    <span>Instructions: </span>
                        <input className="textarea" type="text" name="analyzedInstructions" value={title.analyzedInstructions} onChange={handleChange} />
                    </label>

                    <br></br>

                    {error.hasOwnProperty("title") || error.hasOwnProperty("summary") || error.hasOwnProperty("healthScore") ? <p className="error1">Enter all required inputs</p> : <button type='submit'> Create Recipe</button>}

                </form>

                <div></div>
                <div></div>
            </div>

        </div>
    )


}