
const types = {
    ITEM: {
        FETCH: {
            STARTED: {
                type: 'ITEM|FETCH_STARTED'
            },
            FINISHED: {
                type: 'ITEM|FETCH_FINISHED'
            },
            ERROR: {
                type: 'ITEM|FETCH_ERROR'
            },
            ALL: {
                type: 'ITEM|FETCH_ALL_ACTION'
            },
        },
        STORE: {
            ONE: {
                type: 'ITEM|STORE_ACTION'
            }
        },
        ADD: {
            ONE: {
                type: 'ITEM|ADD_ACTION'
            }
        },
        REMOVE: {
            ONE: {
                type: 'ITEM|REMOVE_ACTION'
            }
        }
    }
};

export default types;