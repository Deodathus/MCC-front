import {Box, Divider, SimpleGrid} from "@chakra-ui/react";
import RecipeIngredientComponent from "./ingredient/RecipeIngredientComponent";
import RecipeResultComponent from "./recipeResult/RecipeResultComponent";

export default function ItemRecipeComponent(props) {
    const recipe = props.recipe;
    const onClick = props.onClick;

    let ingredients = recipe.ingredients.map(ingredient => {
        return <RecipeIngredientComponent key={Math.random() + '_' + ingredient.id} ingredient={ingredient} />
    });
    let results = recipe.results.map(result => {
        return <RecipeResultComponent key={Math.random() + '_' + result.id} result={result} />
    });

    return (
        <>
            <SimpleGrid onClick={onClick} columns={{sm: 2, md: 2, lg: 2}} className='itemRecipe'>
                <Box>
                    <span className='itemShowLabel'>Ingredients:</span>
                    {ingredients}
                </Box>
                <Box>
                    <span className='itemShowLabel'>Results:</span>
                    {results}
                </Box>
            </SimpleGrid>
            <Divider className='pdt10' />
        </>
    );
}
