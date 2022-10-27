import React from 'react'
import s from './sidebar.css'

export default function sidebar() {
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
