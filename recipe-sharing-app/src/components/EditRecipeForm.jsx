import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeId, onClose }) => {
  const { recipes, updateRecipe } = useRecipeStore();
  const [formData, setFormData] = useState({ title: '', description: '' });


  useEffect(() => {
    const recipe = recipes.find((r) => r.id === recipeId);
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipeId, recipes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, formData);
    onClose(); // Close the form after saving
  };

  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
