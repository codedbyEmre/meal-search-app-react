import React from 'react'
import MealList from '../components/MealList'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <div className = 'container'>
      <Search />
      <MealList />
    </div>
  )
}

export default HomePage

