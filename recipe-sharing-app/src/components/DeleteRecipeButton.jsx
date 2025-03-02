import React from 'react'
import useRecipeStore from './recipeStore'

export const DeleteRecipeButton = (recipeId) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete
    </button>
  );
}


export default DeleteRecipeButton
