let recipes = [];

document.addEventListener("DOMContentLoaded", function() {
    const recipeListUl = document.getElementById("recipe-list-ul");
    const addRecipeForm = document.getElementById("add-recipe-form");

    addRecipeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const recipeName = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;

        const newRecipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        recipes.push(newRecipe);
        displayRecipes();
        addRecipeForm.reset();
    });

    displayRecipes();
});

function displayRecipes() {
    const recipeListUl = document.getElementById("recipe-list-ul");
    recipeListUl.innerHTML = "";

    recipes.forEach(function(recipe) {
        const recipeLi = document.createElement("li");
        recipeLi.textContent = recipe.name;
        recipeListUl.appendChild(recipeLi);
    });
}
