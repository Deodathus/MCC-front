import Types from "../../dictionaries/actions/item/Types";

function fetchRecipesForItemFinished(data) {
    return {
        type: Types.ITEM.FETCH.RECIPES_FINISHED.type,
        payload: data
    };
}

function fetchRecipesAsIngredientForItemFinished(itemId, data, totalPages) {
    return {
        type: Types.ITEM.FETCH.RECIPES_AS_INGREDIENT_FINISHED.type,
        payload: {
            data,
            itemId: parseInt(itemId),
            totalPages
        }
    }
}

function fetchRecipesAsResultForItemFinished(itemId, data, totalPages) {
    return {
        type: Types.ITEM.FETCH.RECIPES_AS_RESULT_FINISHED.type,
        payload: {
            data,
            itemId: parseInt(itemId),
            totalPages
        }
    };
}

function fetchRecipesForItemError(error) {
    return {
        type: Types.ITEM.FETCH.RECIPES_ERROR.type,
        payload: error,
        error: 1
    }
}

export default {
    fetchRecipesForItemFinished,
    fetchRecipesAsIngredientForItemFinished,
    fetchRecipesAsResultForItemFinished,
    fetchRecipesForItemError
}
