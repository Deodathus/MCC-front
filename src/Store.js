
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import RootReducer from "./reducers/RootReducer";
import Statuses from "./dictionaries/actions/item/Statuses";
import ProcessStatuses from "./dictionaries/actions/process/Statuses";

let preloadedState = {
    data: {
        general: {
            version: '1.2.1',
            year: 2022
        }
    },
    items: {
        elements: {},
        status: Statuses.loading,
        recipes: {},
        pagination: {},
        process: {
            storeOne: {
                status: ProcessStatuses.idle
            }
        }
    },
    recipes: {
        process: {
            storeOne: {
                status: ProcessStatuses.idle
            }
        }
    },
    forms: {
        createItem: {
            key: '',
            subKey: '',
            name: ''
        }
    }
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(RootReducer, preloadedState, composedEnhancer);

export default store;