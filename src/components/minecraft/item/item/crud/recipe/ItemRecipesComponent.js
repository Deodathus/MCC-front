
import ItemAsIngredientListComponent from "./ItemAsIngredientListComponent";
import ItemAsResultListComponent from "./ItemAsResultListComponent";
import {useDispatch, useSelector} from "react-redux";
import ItemRecipeReducer from "../../../../../../reducers/item/ItemRecipeReducer";
import ItemRecipesSkeletonComponent from "./ItemRecipesSkeletonComponent";

export default function ItemRecipesComponent(props) {
    const dispatch = useDispatch();
    const itemId = props.itemId;

    const itemRecipes = useSelector(state => {
        return Object.values(state.items.recipes).find(recipes => recipes.itemId === parseInt(itemId));
    });

    if (!itemRecipes) {
        dispatch(ItemRecipeReducer.fetchRecipesForItem(itemId));

        return (
            <>
                <ItemRecipesSkeletonComponent />
            </>
        );
    }

    return (
        <>
            <ItemAsIngredientListComponent recipes={itemRecipes.recipes.asIngredient} />
            <ItemAsResultListComponent recipes={itemRecipes.recipes.asResult} />
        </>
    );
}
