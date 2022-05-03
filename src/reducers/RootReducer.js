import {combineReducers} from "redux";

import ItemReducer from "./item/ItemReducer";
import FormsReducer from "./form/FormsReducer";
import RecipeReducer from "./recipe/RecipeReducer";

const rootReducer = combineReducers(
    {
        items: ItemReducer,
        forms: FormsReducer,
        recipes: RecipeReducer
    }
);

export default rootReducer;