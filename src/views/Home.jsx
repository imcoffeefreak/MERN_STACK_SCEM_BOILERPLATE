import React, { useState, useEffect } from "react";
import "../styles/recipe.css";
import { recipeControllerObj } from "../controller/recipe.controller";
import CreateRecipe from "./CreateRecipe";

function HomeLayout() {
  const [recipeList, setRecipeList] = useState([]);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    async function getRecipe() {
      const response = await recipeControllerObj.getAllRecipe();
      if (response) {
        setRecipeList(response);
      }
    }
    getRecipe();
  }, []);

  const toggleView = () => {
    setIsCreate(!isCreate);
  };

  return (
    <section className="recipe-section">
      {isCreate ? (
        <CreateRecipe />
      ) : (
        <div className="recipe-container">
          <button onClick={() => toggleView()}>Create Recipe</button>
          <div className="all-recipe-container">
            <p>length of recipe is {recipeList.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default HomeLayout;
