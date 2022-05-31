import RecipeIngredientComponent from "../../../../crud/recipe/ingredient/RecipeIngredientComponent";
import {Box} from "@chakra-ui/react";

export default function RecipeTreeIngredientComponent(props) {
    const ingredient = props.ingredient;

    let ingredientAsResults;

    if (ingredient.asResult) {
        ingredientAsResults = ingredient.asResult.map((asResultIngredient, key) => {
            return <RecipeTreeIngredientComponent ingredient={asResultIngredient} key={key} />
        });
    }

    return (
        <>
            <RecipeIngredientComponent ingredient={ingredient} />
            <Box className='subIngredientsList'>
                { ingredientAsResults }
            </Box>
        </>
    );
}
