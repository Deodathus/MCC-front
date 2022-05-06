import {Box, Center, Skeleton} from "@chakra-ui/react";

export default function ItemSkeletonComponent(props) {
    return (
        <>
            <Box height='150px' width='150px'>
                <Box height='70px'>
                    <Center paddingTop='10px'>
                        <Skeleton height='60px' width='60px' />
                    </Center>
                </Box>
                <Box height='80px'>
                    <Center paddingTop='5px'>
                        <Skeleton height='60px' width='100px' />
                    </Center>
                </Box>
            </Box>
        </>
    );
}
