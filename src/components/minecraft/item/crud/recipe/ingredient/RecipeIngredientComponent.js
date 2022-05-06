import {Box, Grid, GridItem, Skeleton} from "@chakra-ui/react";
import AmountInStacksComponent from "../AmountInStacksComponent";

export default function RecipeIngredientComponent(props) {
    const ingredient = props.ingredient;

    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' className='recipeIngredient'>
                <GridItem rowSpan={2} colSpan={1}>
                    <Skeleton height='50px' width='50px' />
                </GridItem>
                <GridItem colSpan={3}>
                    <Box>
                        <span className='itemShowLabel'>Name: </span>{ingredient.itemName}
                    </Box>
                    <Box>
                        <span className='itemShowLabel'>Amount: </span>{ingredient.amount} <AmountInStacksComponent amount={ingredient.amount} />
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}
