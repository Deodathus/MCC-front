import Types from "../../dictionaries/actions/item/Types";

function fetchRecipesForItemFinished(data) {
    return {
        type: Types.ITEM.FETCH.RECIPES_FINISHED.type,
        payload: data
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
    fetchRecipesForItemError
}
