import {Box, Grid, GridItem, Skeleton} from "@chakra-ui/react";

export default function RecipeResultComponent(props) {
    const result = props.result;

    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' className='recipeIngredient'>
                <GridItem rowSpan={2} colSpan={1}>
                    <Skeleton height='50px' width='50px' />
                </GridItem>
                <GridItem colSpan={3}>
                    <Box>
                        <span className='itemShowLabel'>Name: </span>{result.itemName}
                    </Box>
                    <Box>
                        <span className='itemShowLabel'>Amount: </span>{result.amount}
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}
