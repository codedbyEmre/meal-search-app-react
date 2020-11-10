import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [meals, setMeals] = useState([])

  const searchMeals = useCallback( async () => {
    setLoading(true)

    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

    const { meals } = res.data
    if (meals) {
      const newMeals = meals.map((item) => {
        const {
          idMeal,
          strMeal,
          strMealThumb,
        } = item

        return {
          id: idMeal,
          name: strMeal,
          image: strMealThumb,
        }
      })
      setMeals(newMeals)
    } else {
      setMeals([])
    }
    setLoading(false)

  },[searchTerm])
  useEffect(() => {
    searchMeals()
  }, [searchTerm,searchMeals])
  return (
    <AppContext.Provider
      value={{ loading, meals, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
