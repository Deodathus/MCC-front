import FetchRecipesForItem from "../../services/minecraft/item/crud/FetchRecipesForItem";
import ItemRecipeActionCreator from "../../actions/item/ItemRecipeActionCreator";

function fetchRecipesForItem(itemId) {
    return async function fetchRecipesForItemThunk(dispatch, getState) {
        await FetchRecipesForItem(itemId)
            .then(response => {
                dispatch(ItemRecipeActionCreator.fetchRecipesForItemFinished(response.data));
            })
            .catch(error => {
                dispatch(ItemRecipeActionCreator.fetchRecipesForItemError(error));
            });
    }
}

function fetchRecipesForItemFinished(state, action) {
    const recipes = {
        ...state.recipes
    }

    recipes[action.payload.itemId] = action.payload;

    return {
        ...state,
        recipes: recipes
    };
}

export default {
    fetchRecipesForItem,
    fetchRecipesForItemFinished
};
