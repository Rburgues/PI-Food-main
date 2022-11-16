import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllSearch, cleanData } from '../../Redux/action'
import s from "./Search.module.css"
import searchIcon from '../../images/search.png'


function Search() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(AllSearch(search))
        dispatch(cleanData());     
    }

    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
   
  
  return (
    <div className={s.SearchBar}>
    <form className={s.searchContainer} onSubmit={e=>handleSubmit(e) }  >

        <input className={s.inputSearch} type="text" onChange={(e) => onInputChange(e)} placeholder="Search a recipe..." value={search} title='Here you can write the name of a recipe' />
        <button className={s.searchContainerInput} type="submit" value="Search"  title='Click the button, to start a new search!' > 
        <img className={s.searchIcon} src={searchIcon} />
        </button>
    </form>


</div>

  )
}

export default Search

