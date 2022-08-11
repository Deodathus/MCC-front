import Types from "../../dictionaries/actions/item/Types";

function storeRecipe(name, ingredients, results) {
    return {
        type: Types.RECIPE.STORE.ONE.type,
        payload: {
            name,
            ingredients,
            results
        }
    };
}

function storeRecipeSuccess() {
    return {
        type: Types.RECIPE.STORE.SUCCESS.type
    }
}

function storeRecipeError() {
    return {
        type: Types.RECIPE.STORE.ERROR.type
    };
}

function resetStoreRecipeStatus() {
    return {
        type: Types.RECIPE.STORE.RESET_STATUS.type
    }
}

export default {
    storeRecipe,
    storeRecipeSuccess,
    storeRecipeError,
    resetStoreRecipeStatus
};
