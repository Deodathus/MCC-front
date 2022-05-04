import {Box, Skeleton} from "@chakra-ui/react";

export default function ItemSkeletonComponent() {
    return (
        <Box className='itemShowContent'>
            <Box>
                <Skeleton height='60px' width='60px' />
            </Box>
            <Box>
                <Skeleton height='20px' width='150px' />
            </Box>
            <Box>
                <Skeleton height='20px' width='150px' />
            </Box>
            <Box>
                <Skeleton height='20px' width='150px' />
            </Box>
        </Box>
    );
}
