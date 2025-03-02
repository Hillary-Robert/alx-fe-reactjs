import React, { useState } from "react";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <DeleteRecipeButton recipeId={recipe.id} />

         
        </div>
    
        
      ))}

      {/* Render Edit Form when a recipe is selected for editing */}
      {editingId && (
        <EditRecipeForm
          recipeId={editingId}
          onClose={() => setEditingId(null)}
        />
      )}


        
    </div>
  );
};

export default RecipeList;