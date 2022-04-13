
import Types from '../../dictionaries/actions/item/Types';

function fetchAll() {
    return {
        type: Types.ITEM.FETCH.ALL.type
    };
}

function fetchStarted() {
    return {
        type: Types.ITEM.FETCH.STARTED.type
    }
}

function fetchError(error) {
    return {
        type: Types.ITEM.FETCH.ERROR.type,
        error: 1,
        payload: error
    }
}

function fetchFinished(items) {
    return {
        type: Types.ITEM.FETCH.FINISHED.type,
        payload: items
    }
}

function storeItem(key, subKey, name) {
    return {
        type: Types.ITEM.STORE.ONE.type,
        payload: {
            key,
            subKey,
            name
        }
    };
}

function addItem(itemId, key, subKey, name) {
    return {
        type: Types.ITEM.ADD.ONE.type,
        payload: {
            itemId,
            key,
            subKey,
            name
        }
    };
}

function removeItem(itemId) {
    return {
        type: Types.ITEM.REMOVE.ONE.type,
        payload: {
            itemId
        }
    }
}

export default {
    fetchAll,
    fetchStarted,
    fetchError,
    fetchFinished,
    storeItem,
    addItem,
    removeItem
}
