import {Box, Skeleton} from "@chakra-ui/react";

export default function ItemRecipesSkeletonComponent() {
    return (
        <>
            <Box>
                <Skeleton widht='800px' height='800px' />
            </Box>
        </>
    );
}
