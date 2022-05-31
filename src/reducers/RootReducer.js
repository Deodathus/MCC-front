import {combineReducers} from "redux";

import ItemReducer from "./item/ItemReducer";
import FormsReducer from "./form/FormsReducer";
import RecipeReducer from "./recipe/RecipeReducer";
import DataReducer from "./DataReducer";

const rootReducer = combineReducers(
    {
        items: ItemReducer,
        forms: FormsReducer,
        recipes: RecipeReducer,
        data: DataReducer
    }
);

export default rootReducer;