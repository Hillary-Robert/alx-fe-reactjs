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
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;