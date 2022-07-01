import {Box, Grid, GridItem, Skeleton} from "@chakra-ui/react";
import AmountInStacksComponent from "../../../../crud/recipe/AmountInStacksComponent";

export default function TotalIngredientItemComponent(props) {
    const item = props.item;

    return (
        <>
            <Grid templateColumns='repeat(6, 1fr)' className='recipeIngredient'>
                <GridItem rowSpan={2} colSpan={1}>
                    <Skeleton height='50px' width='50px' />
                </GridItem>
                <GridItem colSpan={5}>
                    <Box>
                        <span className='itemShowLabel'>Name:</span> {item.name}
                    </Box>
                    <Box>
                        <span className='itemShowLabel'>Amount:</span> {item.amount} <AmountInStacksComponent amount={item.amount} />
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}
