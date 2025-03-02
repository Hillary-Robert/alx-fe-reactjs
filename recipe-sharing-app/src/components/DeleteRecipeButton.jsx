import React from 'react';
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';  

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ marginLeft: '10px', color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
