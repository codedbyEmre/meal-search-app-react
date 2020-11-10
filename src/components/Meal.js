import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({ image, name, id}) => {
  return (
    <Link to = {`/meal/${id}`} className='meal'>
        <img src={image} alt={name} />
        <div className="meal-info">
          <h3>{name}</h3>
        </div>
    </Link>
  )
}

export default Meal
