import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import ItemRecipeWithModalComponent from "../ItemRecipeWithModalComponent";
import {useDispatch, useSelector} from "react-redux";
import ItemRecipeReducer from "../../../../../../reducers/item/ItemRecipeReducer";
import ItemRecipesSkeletonComponent from "../ItemRecipesSkeletonComponent";
import ReactPaginate from "react-paginate";

export default function ItemAsResultListComponent(props) {
    const dispatch = useDispatch();
    const itemId = props.itemId;

    const recipes = useSelector(state => {
        return state.items.recipes.asResult[itemId];
    });

    const totalPages = useSelector(state => {
        if (state.items.recipes.pagination.asResult) {
            let totalPagesCount = state.items.recipes.pagination.asResult[itemId];

            return totalPagesCount > 1 ? totalPagesCount : 0;
        } else {
            return 0;
        }
    });

    if (!recipes) {
        dispatch(ItemRecipeReducer.fetchRecipesAsResultForItem(itemId, 1, 10));

        return (
            <>
                <ItemRecipesSkeletonComponent />
            </>
        );
    }

    let asInResultsRecipes = recipes.map(recipe => {
        return <ItemRecipeWithModalComponent key={recipe.id} recipe={recipe} />
    });

    function handlePageChange(event) {
        let page = event.selected + 1;

        dispatch(ItemRecipeReducer.fetchRecipesAsResultForItem(itemId, page, 10));
    }

    return (
        <Box className='itemRecipes'>
            <Heading as='h3' size='lg'>As result</Heading>
            <SimpleGrid columns={{sm: 1, md: 1, lg: 1}}>
                { asInResultsRecipes }
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
