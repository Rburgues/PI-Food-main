import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllSearch } from '../../Redux/action'
import "./Search.css"


function Search() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(AllSearch(search))
        setSearch("")

    }
    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
   
  
  return (
    <div className='Search-Bar'>
    <form className="search-container " onSubmit={e=>handleSubmit(e) }  >

        <input className='inputSearch' type="text" onChange={(e) => onInputChange(e)} placeholder="Search a recipe..." value={search} />
        <input className="search-container-Input" type="submit" value="Search" />
    </form>


</div>

  )
}

export default Search

