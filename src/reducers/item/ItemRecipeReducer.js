import FetchRecipesForItem from "../../services/minecraft/item/crud/FetchRecipesForItem";
import ItemRecipeActionCreator from "../../actions/item/ItemRecipeActionCreator";
import FetchRecipesAsIngredientForItem from "../../services/minecraft/item/crud/FetchRecipesAsIngredientForItem";
import FetchRecipesAsResultForItem from "../../services/minecraft/item/crud/FetchRecipesAsResultForItem";

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

function fetchRecipesAsIngredientForItem(itemId, page, perPage) {
    return async function fetchRecipesAsIngredientForItemThunk(dispatch, getState) {
        await FetchRecipesAsIngredientForItem(itemId, page, perPage)
            .then(response => {
                dispatch(
                    ItemRecipeActionCreator.fetchRecipesAsIngredientForItemFinished(
                        itemId,
                        response.data,
                        response.headers['x-total-pages']
                    )
                );
            })
            .catch(error => {
                dispatch(ItemRecipeActionCreator.fetchRecipesForItemError(error));
            })
    }
}

function fetchRecipesAsResultForItem(itemId, page, perPage) {
    return async function fetchRecipesAsResultForItemThunk(dispatch, getState) {
        await FetchRecipesAsResultForItem(itemId, page, perPage)
            .then(response => {
                dispatch(
                    ItemRecipeActionCreator.fetchRecipesAsResultForItemFinished(
                        itemId,
                        response.data,
                        response.headers['x-total-pages']
                    )
                );
            })
            .catch(error => {
                dispatch(ItemRecipeActionCreator.fetchRecipesForItemError(error));
            });
    }
}

function fetchRecipesAsIngredientForItemFinished(state, action) {
    const itemId = action.payload.itemId;

    return {
        ...state,
        recipes: {
            ...state.recipes,
            asIngredient: {
                ...state.asIngredient,
                [itemId]: action.payload.data,
            },
            pagination: {
                ...state.recipes.pagination,
                asIngredient: {
                    ...state.recipes.pagination.asIngredient,
                    [itemId]: parseInt(action.payload.totalPages)
                }
            }
        }
    };
}

function fetchRecipesAsResultForItemFinished(state, action) {
    const itemId = action.payload.itemId;

    return {
        ...state,
        recipes: {
            ...state.recipes,
            asResult: {
                ...state.asResult,
                [itemId]: action.payload.data,
            },
            pagination: {
                ...state.recipes.pagination,
                asResult: {
                    ...state.recipes.pagination.asResult,
                    [itemId]: parseInt(action.payload.totalPages)
                }
            }
        }
    };
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
    fetchRecipesForItemFinished,
    fetchRecipesAsIngredientForItem,
    fetchRecipesAsResultForItem,
    fetchRecipesAsIngredientForItemFinished,
    fetchRecipesAsResultForItemFinished
};
