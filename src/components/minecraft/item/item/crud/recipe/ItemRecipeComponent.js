import {Box, Divider, SimpleGrid} from "@chakra-ui/react";
import RecipeIngredientComponent from "./RecipeIngredientComponent";
import RecipeResultComponent from "./RecipeResultComponent";
import {Link} from "react-router-dom";

export default function ItemRecipeComponent(props) {
    const recipe = props.recipe;

    let ingredients = recipe.ingredients.map(ingredient => {
        return <RecipeIngredientComponent key={ingredient.id} ingredient={ingredient} />
    });
    let results = recipe.results.map(result => {
        return <RecipeResultComponent key={result.id} result={result} />
    });

    return (
        <>
            <Link to=''>
                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} className='itemRecipe'>
                    <Box>
                        <span className='itemShowLabel'>Ingredients:</span>
                        {ingredients}
                    </Box>
                    <Box>
                        <span className='itemShowLabel'>Results:</span>
                        {results}
                    </Box>
                </SimpleGrid>
            </Link>
            <Divider className='pdt10' />
        </>
    );
}
