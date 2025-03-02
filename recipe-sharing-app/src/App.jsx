import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'

function App() {
  

  return (
    <>
      <RecipeList></RecipeList>
      <AddRecipeForm></AddRecipeForm>

    </>
  )
}

export default App
