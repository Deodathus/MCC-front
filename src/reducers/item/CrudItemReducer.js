import CreateItem from "../../services/minecraft/item/crud/StoreItem";
import FetchItems from "../../services/minecraft/item/crud/FetchItems";
import ItemCrudActionCreator from "../../actions/item/ItemCrudActionCreator";
import Statuses from "../../dictionaries/actions/item/Statuses";
import ItemsArrayToJsonTransformer from "../../services/minecraft/item/transformer/ItemsArrayToJsonTransformer";
import FetchItem from "../../services/minecraft/item/crud/FetchItem";

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

function fetchOne(action) {
    return async function fetchOneThunk(dispatch, getState) {
        dispatch(ItemCrudActionCreator.fetchStarted());

        await FetchItem(action.payload.id)
            .then(response => {
                dispatch(ItemCrudActionCreator.fetchOneFinished(response.data));
            }).catch(error => {
                dispatch(ItemCrudActionCreator.fetchError(error));
            });
    }
}

function fetchOneFinished(state, action) {
    const item = action.payload;
    const result = {...state.elements};

    result[item.id] = item;

    return {
        ...state,
        elements: result,
        status: Statuses.finished
    }
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
    fetchOne,
    fetchOneFinished,
    fetchAll,
    fetchError,
    fetchFinished,
    storeItem
};