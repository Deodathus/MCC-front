import {Box, Heading, ListItem, Tag, UnorderedList} from "@chakra-ui/react";

export default function PatchNoteComponent() {
    return (
        <>
            <Box>
                <Heading as={'h3'} size={'md'}>
                    Patch notes:
                </Heading>
                <Box>
                    <UnorderedList className='patchNotesList'>
                        <ListItem>Basic(CRUD) item, recipe pages <Tag colorScheme='green'>v0.1</Tag></ListItem>
                        <ListItem>Basic(single) recipe calculation <Tag colorScheme='green'>v1</Tag></ListItem>
                        <ListItem>Tree craft calculator <Tag colorScheme='green'>v1.1</Tag></ListItem>
                        <ListItem>Items import from JSON <Tag colorScheme='green'>v1.2</Tag></ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </>
    );
}
