import Types from "../../dictionaries/actions/item/Types";
import CrudItemReducer from "./CrudItemReducer";

export default function ItemReducer(state = [], action) {

    switch (action.type) {
        case Types.ITEM.FETCH.ERROR.type:
            return CrudItemReducer.fetchError(state, action);
        case Types.ITEM.FETCH.STARTED.type:
            return CrudItemReducer.fetchStarted(state, action)
        case Types.ITEM.FETCH.FINISHED.type:
            return CrudItemReducer.fetchFinished(state, action);
        case Types.ITEM.STORE.ONE.type:
            return CrudItemReducer.storeItem(state, action);
        default:
            break;
    }

    return state;
}