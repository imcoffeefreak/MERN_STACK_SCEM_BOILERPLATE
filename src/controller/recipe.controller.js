import axios from "axios";

class RecipeController {
  async getAllRecipe() {
    try {
      const response = await axios.get("http://localhost:8080/api/recipes");
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {}
  }

  async createRecipe(recipeInput) {
    try {
      const data = recipeInput;
      const response = await axios.post(
        "http://localhost:8080/api/recipes",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export const recipeControllerObj = new RecipeController();
