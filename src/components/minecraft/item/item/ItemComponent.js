import {Box, Center, Skeleton} from "@chakra-ui/react";

export default function ItemComponent(props) {
    const item = props.item;

    let itemKeySection = (
        <Box>
            { item.key }
        </Box>
    );

    if (item.subKey !== null) {
        itemKeySection = (
            <Box>
                { item.key }:{ item.subKey }
            </Box>
        );
    }

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
                        <Box>
                            { item.name }
                        </Box>
                    </Center>
                    <Center paddingTop='5ox'>
                        { itemKeySection }
                    </Center>
                </Box>
            </Box>
        </>
    );
}
