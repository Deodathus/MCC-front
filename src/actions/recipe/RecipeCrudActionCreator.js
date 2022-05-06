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

export default {
    storeRecipe
};
