import React from 'react'
import Meal from './Meal'
import Loader from './Loader'
import { useGlobalContext } from '../context'

const MealList = () => {
  const { meals, loading } = useGlobalContext()
  if (loading) {
    return <Loader/>
  }
  if (meals.length < 1) {
    return (
      <h3>
        No meals found
      </h3>
    )
  }
  return (
    <div className='meals'>
        {meals.map((item) => {
          return <Meal key={item.id} {...item} />
        })}
    </div>
  )
}

export default MealList
