import React from 'react'
import s from './Menu.modules.css'

export default function () {
    return (
        <div className={`${s.container} `}>
            <nav>
                <a href=".">Option 1</a>
                <a href=".">Option 2</a>
                <a href=".">Option 3</a>
                <a href=".">Option 4</a>
            </nav>
        </div>


    )
}
