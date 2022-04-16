
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import RootReducer from "./reducers/RootReducer";
import Statuses from "./dictionaries/actions/item/Statuses";

let preloadedState = {
    items: {
        elements: {},
        status: Statuses.loading
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