import Types from "../../dictionaries/actions/item/Types";
import CrudItemReducer from "./CrudItemReducer";
import ItemRecipeReducer from "./ItemRecipeReducer";

export default function ItemReducer(state = [], action) {
    switch (action.type) {
        case Types.ITEM.FETCH.ERROR.type:
            return CrudItemReducer.fetchError(state, action);
        case Types.ITEM.FETCH.STARTED.type:
            return CrudItemReducer.fetchStarted(state, action)
        case Types.ITEM.FETCH.FINISHED.type:
            return CrudItemReducer.fetchFinished(state, action);
        case Types.ITEM.FETCH.ONE_FINISHED.type:
            return CrudItemReducer.fetchOneFinished(state, action);
        case Types.ITEM.FETCH.RECIPES_FINISHED.type:
            return ItemRecipeReducer.fetchRecipesForItemFinished(state, action);

        case Types.ITEM.STORE.ONE.type:
            return CrudItemReducer.storeItem(state, action);
        default:
            break;
    }

    return state;
}