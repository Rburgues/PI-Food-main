import React from "react"
import { Link } from "react-router-dom";
import "./CardRecipe.css"


export default function Card({ id, name, image, diets, healthScore }) {

    return (
        <div className="card">

            <div className="imgCard">
                <Link to={`${id}`}>
                    <img src={image} alt="Imagen" />
                </Link>
            </div>
            <div>
                <Link to={`${id}`}>
                    <h3 className="nameRecipe" >{name}</h3>
                </Link>
            </div>
            <div>
                {diets ? <p className="dietsRecipe">Diets: {diets}</p> : null}
            </div>
            <div>
                <h3 className="healthS">Health Score: {healthScore}</h3>
            </div>

        </div >
    );
};
