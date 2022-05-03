import Types from "../../dictionaries/actions/item/Types";
import CrudRecipeReducer from "./CrudRecipeReducer";

export default function RecipeReducer(state = [], action) {
    switch (action.type) {
        case Types.RECIPE.STORE.ONE.type:
            return CrudRecipeReducer.storeRecipe(state, action);
        default:
            break;
    }

    return state;
}
