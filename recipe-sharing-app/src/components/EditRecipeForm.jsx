import React, { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({ ...recipe });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
