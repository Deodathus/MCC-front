import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import ItemRecipeWithModalComponent from "../ItemRecipeWithModalComponent";

export default function ItemAsResultListComponent(props) {
    const recipes = props.recipes;

    let asInResultsRecipes = recipes.map(recipe => {
        return <ItemRecipeWithModalComponent key={recipe.id} recipe={recipe} />
    });

    return (
        <Box className='itemRecipes'>
            <Heading as='h3' size='lg'>As result</Heading>
            <SimpleGrid columns={{sm: 1, md: 1, lg: 1}}>
                { asInResultsRecipes }
            </SimpleGrid>
        </Box>
    );
}
