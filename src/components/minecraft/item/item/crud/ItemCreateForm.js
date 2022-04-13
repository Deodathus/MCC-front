import { useState } from "react";
import {
    Box, Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    SimpleGrid
} from "@chakra-ui/react";

import {useDispatch} from "react-redux";
import ItemCrudActionCreator from "../../../../../actions/item/ItemCrudActionCreator";

export default function ItemCreateForm() {
    const dispatch = useDispatch();

    const [key, setKey] = useState();
    const [subKey, setSubKey] = useState();
    const [name, setName] = useState('');

    function createItem(e) {
        e.preventDefault();

        dispatch(ItemCrudActionCreator.storeItem(key, subKey, name));
    }

    return (
        <>
            <Container className='content'>
                <form action="/" onSubmit={createItem}>
                    <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='key'>
                                    <span className='label'>Item's key</span>
                                </FormLabel>
                                <NumberInput id='key' name='key' onChange={setKey}>
                                    <NumberInputField />
                                </NumberInput>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='subKey'>
                                    <span className='label'>Item's sub key</span>
                                </FormLabel>
                                <NumberInput id='subKey' name='subKey' onChange={setSubKey}>
                                    <NumberInputField />
                                </NumberInput>
                            </FormControl>
                        </Box>

                    </SimpleGrid>
                    <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} spacing={10}>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='name'>
                                    <span className="label">Item's name</span>
                                </FormLabel>
                                <Input id='name' name='name' onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                        </Box>
                        <Box style={{marginTop: 25}}>
                            <Button colorScheme='teal' size='lg' type='submit'>
                                Create
                            </Button>
                        </Box>
                    </SimpleGrid>
                </form>
            </Container>
        </>
    );
}