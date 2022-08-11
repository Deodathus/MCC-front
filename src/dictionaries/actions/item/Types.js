
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
            },
            SUCCESS: {
                type: 'ITEM|STORE_SUCCESS'
            },
            ERROR: {
                type: 'ITEM|STORE_ERROR'
            },
            RESET_STATUS: {
                type: 'ITEM|RESET_STATUS'
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
            },
            SUCCESS: {
                type: 'RECIPE|STORE_SUCCESS'
            },
            ERROR: {
                type: 'RECIPE|STORE_ERROR'
            },
            RESET_STATUS: {
                type: 'RECIPE|RESET_STATUS'
            }
        }
    }
};

export default types;