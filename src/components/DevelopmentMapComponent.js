import {Box, Heading, ListItem, Tag, UnorderedList} from "@chakra-ui/react";

export default function DevelopmentMapComponent() {
    return (
        <>
            <Box>
                <Heading as={'h3'} size={'md'}>
                    Development map:
                </Heading>
                <Box>
                    <UnorderedList className='developmentMapList'>
                        <ListItem>Tree craft calculator <Tag colorScheme='orange'>~v1.1</Tag></ListItem>
                        <ListItem>Items import from JSON <Tag colorScheme='orange'>~v1.2</Tag></ListItem>
                        <ListItem>Shapeless recipes import from JSON <Tag colorScheme='orange'>~v1.3.0</Tag></ListItem>
                        <ListItem>Shaped recipes import from JSON <Tag colorScheme='orange'>~v1.3.1</Tag></ListItem>
                        <ListItem>GT machines recipes import from JSON <Tag colorScheme='orange'>~v1.3.2</Tag></ListItem>
                        <ListItem>Forestry machines recipes import from JSON <Tag colorScheme='orange'>~v1.3.3</Tag></ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </>
    );
}
