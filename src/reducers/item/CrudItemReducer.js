
import CreateItem from "../../services/minecraft/item/crud/StoreItem";
import FetchItems from "../../services/minecraft/item/crud/FetchItems";
import ItemCrudActionCreator from "../../actions/item/ItemCrudActionCreator";
import Statuses from "../../dictionaries/actions/item/Statuses";
import ProcessStatuses from "../../dictionaries/actions/process/Statuses";
import ItemsArrayToJsonTransformer from "../../services/minecraft/item/transformer/ItemsArrayToJsonTransformer";
import FetchItem from "../../services/minecraft/item/crud/FetchItem";

function fetchStarted(state, action) {
    return {
        ...state,
        status: Statuses.loading
    }
}

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        dispatch(ItemCrudActionCreator.fetchStarted());

        await FetchItems(action.payload.searchPhrase, action.payload.page, action.payload.perPage)
            .then(response => {
                dispatch(ItemCrudActionCreator.fetchFinished(response.data, response.headers));
            })
            .catch(error => {
                dispatch(ItemCrudActionCreator.fetchError(error));
            });
    }
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
    const pagination = {};
    if (action.payload.headers['x-total-pages'].length > 0) {
        pagination.totalPages = action.payload.headers['x-total-pages'];
    }

    return {
        ...state,
        elements: ItemsArrayToJsonTransformer(action.payload.items),
        status: Statuses.finished,
        pagination
    };
}

function fetchError(state, action) {
    return {
        ...state,
        status: Statuses.error
    };
}

function storeItem(action) {
    return async function storeItemThunk(dispatch, getState) {
        const itemToStore = action.payload;

        await CreateItem(
            itemToStore.key,
            itemToStore.subKey,
            itemToStore.name
        ).then(response => {
            if (response.status === 201) {
                dispatch(ItemCrudActionCreator.storeItemSuccess());
            } else {
                dispatch(ItemCrudActionCreator.storeItemError());
            }
        }).catch(error => {
            dispatch(ItemCrudActionCreator.storeItemError());
        })
    }
}

function storeItemSuccess(state) {
    return {
        ...state,
        process: {
            ...state.process,
            storeOne: {
                status: ProcessStatuses.success
            }
        }
    };
}

function storeItemError(state) {
    return {
        ...state,
        process: {
            ...state.process,
            storeOne: {
                status: ProcessStatuses.error
            }
        }
    };
}

function resetStoreItemStatus(state) {
    return {
        ...state,
        process: {
            ...state.process,
            storeOne: {
                status: ProcessStatuses.idle
            }
        }
    };
}

export default {
    fetchStarted,
    fetchOne,
    fetchOneFinished,
    fetchAll,
    fetchError,
    fetchFinished,
    storeItem,
    storeItemSuccess,
    storeItemError,
    resetStoreItemStatus
};