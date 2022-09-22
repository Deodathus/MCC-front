
import ItemAsIngredientListComponent from "./ingredient/ItemAsIngredientListComponent";
import ItemAsResultListComponent from "./recipeResult/ItemAsResultListComponent";

export default function ItemRecipesComponent(props) {
    const itemId = props.itemId;

    return (
        <>
            <ItemAsIngredientListComponent itemId={itemId} />
            <ItemAsResultListComponent itemId={itemId} />
        </>
    );
}
