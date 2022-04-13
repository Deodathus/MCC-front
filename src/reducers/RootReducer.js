import {combineReducers} from "redux";

import ItemReducer from "./item/ItemReducer";
import FormsReducer from "./form/FormsReducer";

const rootReducer = combineReducers(
    {
        items: ItemReducer,
        forms: FormsReducer
    }
);

export default rootReducer;