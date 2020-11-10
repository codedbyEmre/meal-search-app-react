import React from 'react'
import Loader from '../components/Loader'
import { useParams, Link } from 'react-router-dom'

const SingleMeal = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [meal, setMeal] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getMeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strArea: area,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
            strYoutube: video,
          } = data.meals[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
          ]

          const videoUrl = `https://www.youtube.com/embed/${video.slice(-11)}`;

          const newMeal = {
            name,
            image,
            category,
            area,
            instructions,
            ingredients,
            videoUrl
          }
          setMeal(newMeal)
        } else {
          setMeal(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getMeal()
  }, [id])
  if (loading) {
    return <Loader/>
  }
  if (!meal) {
    return <h2>No meals found</h2>
  } else {
    const {
      name,
      image,
      category,
      area,
      instructions,
      ingredients,
      videoUrl
    } = meal
    return (
      <div className='single-meal'>
        <Link to='/' className='closeBtn'>
          <i className="fas fa-times fa-2x"></i>
        </Link>
        <div className='modal-left'>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          <div class="single-meal-info">
            <div>
              <p><strong>Category: </strong>{category}</p>
            </div>
            <div>
              <p><strong>Area: </strong>{area}</p>
            </div>
          </div>
        </div>
        <div className='modal-right'>
          <div className="main">
            <h2>Instructions</h2>
            <p>{instructions}</p>
            <h2>Ingredients</h2>
            <ul>
              <li>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
              </li>
            </ul>
          </div>
          <div class = 'video'>
            <h2>Recipe Video</h2>
            <iframe title='meal' width="500" height="300" allowfullscreen = 'true'
            src={videoUrl}>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleMeal
