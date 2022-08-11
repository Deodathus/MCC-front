import Types from "../../dictionaries/actions/item/Types";
import CrudRecipeReducer from "./CrudRecipeReducer";

export default function RecipeReducer(state = [], action) {
    switch (action.type) {
        case Types.RECIPE.STORE.ONE.type:
            return CrudRecipeReducer.storeRecipe(state, action);
        case Types.RECIPE.STORE.SUCCESS.type:
            return CrudRecipeReducer.storeRecipeSuccess(state, action);
        case Types.RECIPE.STORE.ERROR.type:
            return CrudRecipeReducer.storeRecipeError(state, action);
        case Types.RECIPE.STORE.RESET_STATUS.type:
            return CrudRecipeReducer.resetStoreRecipeStatus(state, action);
        default:
            break;
    }

    return state;
}
