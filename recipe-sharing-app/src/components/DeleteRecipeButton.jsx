import React from 'react';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ marginLeft: '10px', color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
