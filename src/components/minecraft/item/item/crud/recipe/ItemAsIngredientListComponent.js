import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import ItemRecipeWithModalComponent from "./ItemRecipeWithModalComponent";

export default function ItemAsIngredientListComponent(props) {
    const recipes = props.recipes;

    let asInIngredientsRecipes = recipes.map(recipe => {
        return <ItemRecipeWithModalComponent key={recipe.id} recipe={recipe} />
    });

    return (
        <Box className='itemRecipes'>
            <Heading as='h3' size='lg'>As ingredient</Heading>
            <SimpleGrid columns={{sm: 1, md: 1, lg: 1}}>
                { asInIngredientsRecipes }
            </SimpleGrid>
        </Box>
    );
}
