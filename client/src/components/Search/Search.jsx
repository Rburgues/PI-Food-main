import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllSearch, resetData } from '../../Redux/action'
import "./Search.css"
import searchIcon from '../../images/search.png'


function Search() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(AllSearch(search))
        dispatch(resetData());
        setSearch("")

    }
    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
   
  
  return (
    <div className='Search-Bar'>
    <form className="search-container " onSubmit={e=>handleSubmit(e) }  >

        <input className='inputSearch' type="text" onChange={(e) => onInputChange(e)} placeholder="Search a recipe..." value={search} title='Here you can write the name of a recipe' />
        <button className="search-container-Input" type="submit" value="Search"  title='Click the button, to start a new search!' > 
        <img className='searchIcon' src={searchIcon} />
        </button>
    </form>


</div>

  )
}

export default Search

