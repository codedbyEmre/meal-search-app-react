import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchMeal = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleEvent = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="search-section">
        <div className = 'title'>
            <i class="fas fa-utensils"></i>
            <h1>Search Meals</h1> 
            <i class="fas fa-utensils"></i>
        </div>
        <form className='form' onSubmit={handleEvent}>
            <input
              type='text'
              id='name'
              ref={searchValue}
              autoComplete = 'off'
              autoFocus
              onChange={searchMeal}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
        </form>
    </div>
  )
}

export default Search
