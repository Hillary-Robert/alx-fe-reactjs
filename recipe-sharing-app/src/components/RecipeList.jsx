import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DeleteRecipeButton from "./DeleteRecipeButton";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          <DeleteRecipeButton recipeId={recipe.id} />

         
        </div>
    
        
      ))}
    
    </div>
  );
};

export default RecipeList;