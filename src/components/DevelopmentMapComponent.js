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
                        <ListItem>
                            <span className='versionReleased'>Tree craft calculator</span> <Tag colorScheme='orange'><span className='versionReleased'>~v1.1</span></Tag>
                        </ListItem>
                        <ListItem>
                            <span className='versionReleased'>Items import from JSON</span> <Tag colorScheme='orange'><span className='versionReleased'>~v1.2</span></Tag>
                        </ListItem>
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
