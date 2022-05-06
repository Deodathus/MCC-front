
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
            ONE: {
                type: 'ITEM|FETCH_ONE_ACTION'
            },
            ONE_FINISHED: {
                type: 'ITEM|FETCH_ONE_FINISHED'
            },
            RECIPES_FINISHED: {
                type: 'ITEM|FETCH_RECIPES_FINISHED'
            },
            RECIPES_ERROR: {
                type: 'ITEM|FETCH_RECIPES_ERROR'
            }
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
    },
    RECIPE: {
        STORE: {
            ONE: {
                type: 'RECIPE|STORE_ACTION'
            }
        }
    }
};

export default types;