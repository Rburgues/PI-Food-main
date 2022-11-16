import React from 'react'
import s from "./Paginacion.module.css"

export const Paginacion = ({ porPagina, pagina, all_Recipes, paginado, setPagina, maximo }) => {

    const pageNumbers = []
    const maxpage = Math.ceil(all_Recipes / porPagina)

    for (let i = 0; i < maxpage; i++) {
        pageNumbers.push(i + 1)
    }
    function onPrevClick() {
        setPagina(pagina - 1)
    }
    function onNextClick() {
        setPagina(pagina + 1)
    }

    return (
        <nav>
            <ul className={s.click}>
                <button className={s.button1} disabled={pagina === 1 || pagina < 1} onClick={onPrevClick}> Prev</button>

                {pageNumbers.map(num => {
                    return (

                        <li key={num}>

                            <button className={s.button2} onClick={() => paginado(num)}>{num}</button>

                        </li>
                    )
                })}
                <button className={s.button1} disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)} onClick={onNextClick}>Next</button>

            </ul>
            <div className={s.actualP}>{`Actual Page  ${pagina}`} </div>

        </nav>


    )
}