import StoreRecipe from "../../services/minecraft/recipe/crud/StoreRecipe";

function storeRecipe(state, action) {
    const recipeToStore = action.payload;

    StoreRecipe(
        recipeToStore.name,
        recipeToStore.ingredients,
        recipeToStore.results
    );

    return state;
}

export default {
    storeRecipe,
};
