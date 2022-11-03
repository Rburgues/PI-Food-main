import React from "react"
import { Link } from "react-router-dom";
import "./CardRecipe.css"


export default function Card({ id, name, image, diets, healthScore }) {

    return (
        <div className="card">

            <div className="">
                <Link className="Link" to={`${id}`}>
                    <img className="imgCard" src={image} alt="Imagen" />
                
                    <h3 className="h3" >{name}</h3>
            
                    {diets ? <p className="p">Diets: {diets}</p> : null}
                    <h3 className="Head">Health Score: {healthScore}</h3>

                </Link>

            </div>



        </div >
    );
};
