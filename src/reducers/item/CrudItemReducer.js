import CreateItem from "../../services/minecraft/item/crud/StoreItem";
import FetchItems from "../../services/minecraft/item/crud/FetchItems";
import ItemCrudActionCreator from "../../actions/item/ItemCrudActionCreator";
import Statuses from "../../dictionaries/actions/item/Statuses";
import ItemsArrayToJsonTransformer from "../../services/minecraft/item/transformer/ItemsArrayToJsonTransformer";

function fetchStarted(state, action) {
    return {
        ...state,
        status: Statuses.loading
    }
}

async function fetchAll(dispatch, getState) {
    dispatch(ItemCrudActionCreator.fetchStarted());

    await FetchItems()
        .then(response => {
            dispatch(ItemCrudActionCreator.fetchFinished(response.data));
        })
        .catch(error => {
            dispatch(ItemCrudActionCreator.fetchError(error));
        });
}

function fetchFinished(state, action) {
    return {
        ...state,
        elements: ItemsArrayToJsonTransformer(action.payload),
        status: Statuses.finished
    };
}

function fetchError(state, action) {
    return {
        ...state,
        status: Statuses.error
    };
}

function storeItem(state, action) {
    const itemToStore = action.payload;

    CreateItem(
        itemToStore.key,
        itemToStore.subKey,
        itemToStore.name
    );

    return state;
}

export default {
    fetchStarted,
    fetchAll,
    fetchError,
    fetchFinished,
    storeItem
};