import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to keep track of selected recipe

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToRecipeList = () => {
    setSelectedRecipe(null); // Reset selected recipe when going back to the list
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={handleBackToRecipeList} />
      ) : (
        <RecipeListPage onRecipeSelect={handleRecipeSelect} />
      )}
    </div>
  );
};
