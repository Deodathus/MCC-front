
import ItemAsIngredientListComponent from "./ingredient/ItemAsIngredientListComponent";
import ItemAsResultListComponent from "./recipeResult/ItemAsResultListComponent";
import {useDispatch, useSelector} from "react-redux";
import ItemRecipeReducer from "../../../../../reducers/item/ItemRecipeReducer";
import ItemRecipesSkeletonComponent from "./ItemRecipesSkeletonComponent";

export default function ItemRecipesComponent(props) {
    const dispatch = useDispatch();
    const itemId = props.itemId;

    const itemRecipesAsIngredients = useSelector(state => {
        return state.items.recipes.asIngredient[itemId]
    });

    const itemRecipesAsResult = useSelector(state => {
        return state.items.recipes.asResult[itemId];
    });

    if (!itemRecipesAsIngredients && !itemRecipesAsResult) {
        dispatch(ItemRecipeReducer.fetchRecipesAsIngredientForItem(itemId));
        dispatch(ItemRecipeReducer.fetchRecipesAsResultForItem(itemId));

        return (
            <>
                <ItemRecipesSkeletonComponent />
            </>
        );
    } else if (itemRecipesAsIngredients && !itemRecipesAsResult) {
        return (
            <>
                <ItemAsIngredientListComponent recipes={itemRecipesAsIngredients} />
                <ItemRecipesSkeletonComponent />
            </>
        );
    } else if (itemRecipesAsResult && !itemRecipesAsIngredients) {
        return (
            <>
                <ItemRecipesSkeletonComponent />
                <ItemAsResultListComponent recipes={itemRecipesAsResult} />
            </>
        );
    }

    return (
        <>
            <ItemAsIngredientListComponent recipes={itemRecipesAsIngredients} />
            <ItemAsResultListComponent recipes={itemRecipesAsResult} />
        </>
    );
}
