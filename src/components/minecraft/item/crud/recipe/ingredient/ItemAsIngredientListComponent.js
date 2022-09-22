import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import ItemRecipeWithModalComponent from "../ItemRecipeWithModalComponent";
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import ItemRecipeReducer from "../../../../../../reducers/item/ItemRecipeReducer";
import ItemRecipesSkeletonComponent from "../ItemRecipesSkeletonComponent";

export default function ItemAsIngredientListComponent(props) {
    const dispatch = useDispatch();
    const itemId = props.itemId;

    const recipes = useSelector(state => {
        return state.items.recipes.asIngredient[itemId];
    });

    const totalPages = useSelector(state => {
        if (state.items.recipes.pagination.asIngredient) {
            let totalPagesCount = state.items.recipes.pagination.asIngredient[itemId];

            return totalPagesCount > 1 ? totalPagesCount : 0;
        } else {
            return 0;
        }
    });

    if (!recipes) {
        dispatch(ItemRecipeReducer.fetchRecipesAsIngredientForItem(itemId, 1, 10));

        return (
            <>
                <ItemRecipesSkeletonComponent />
            </>
        );
    }

    let asInIngredientsRecipes = recipes.map(recipe => {
        return <ItemRecipeWithModalComponent key={recipe.id} recipe={recipe} />
    });

    function handlePageChange(event) {
        let page = event.selected + 1;

        dispatch(ItemRecipeReducer.fetchRecipesAsIngredientForItem(itemId, page, 10));
    }

    return (
        <Box className='itemRecipes'>
            <Heading as='h3' size='lg'>As ingredient</Heading>
            <SimpleGrid columns={{sm: 1, md: 1, lg: 1}}>
                { asInIngredientsRecipes }
            </SimpleGrid>

            <Box className='paginator'>
                <ReactPaginate
                    renderOnZeroPageCount={null}
                    onPageChange={(e) => {handlePageChange(e)}}
                    pageCount={Math.ceil(totalPages)}
                />
            </Box>
        </Box>
    );
}
