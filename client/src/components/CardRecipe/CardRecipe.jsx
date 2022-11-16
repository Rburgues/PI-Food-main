import React from "react"
import { Link } from "react-router-dom";
import s from "./CardRecipe.module.css"


export default function Card({ id, name, image, diets, healthScore }) {

    return (
        <div className={s.card}>

            <div className={s.imgCard}>
                <Link to={`${id}`}>
                    <img src={image} alt="Imagen" />
                </Link>
            </div>
            <div>
                <Link to={`${id}`}>
                    <h3 className={s.nameRecipe} >{name}</h3>
                </Link>
            </div>
            <div>
                {diets ? <p className={s.dietsRecipe}>Diets: {diets}</p> : null}
            </div>
            <div>
                <h3 className={s.healthS}>Health Score: {healthScore}</h3>
            </div>

        </div >
    );
};
