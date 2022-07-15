import RecipeTreeIngredientComponent from "./RecipeTreeIngredientComponent";

export default function RecipeTreeIngredientsComponent(props) {
    const ingredients = props.ingredients;

    let ingredientsComponent = ingredients.map((ingredient, key) => {
        return <RecipeTreeIngredientComponent key={key} ingredient={ingredient} />
    });

    return (
        <>
            { ingredientsComponent }
        </>
    );
}
