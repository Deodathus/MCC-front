import {useState} from "react";
import {
    Box, Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    SimpleGrid, useToast
} from "@chakra-ui/react";

import {useDispatch, useSelector} from "react-redux";
import ItemCrudActionCreator from "../../../../actions/item/ItemCrudActionCreator";
import CrudItemReducer from "../../../../reducers/item/CrudItemReducer";
import Statuses from "../../../../dictionaries/actions/process/Statuses";

export default function ItemCreateForm() {
    const toast = useToast();
    const dispatch = useDispatch();

    const [storeStatus, setStoreStatus] = useState(Statuses.idle);

    const [key, setKey] = useState();
    const [subKey, setSubKey] = useState();
    const [name, setName] = useState('');

    handleStoreStatus();

    function handleStoreStatus() {
        useSelector(state => {
            switch (state.items.process.storeOne.status) {
                default:
                case Statuses.idle:
                    break;
                case Statuses.success:
                    if (storeStatus !== Statuses.success) {
                        toast({
                            title: 'Item was added',
                            status: "success",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });

                        clearForm();
                    }

                    dispatch(ItemCrudActionCreator.resetStoreItemStatus());

                    break;
                case Statuses.error:
                    if (storeStatus !== Statuses.error) {
                        toast({
                            title: 'Item was not added',
                            status: "error",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });
                    }

                    dispatch(ItemCrudActionCreator.resetStoreItemStatus());

                    break;
            }
        });
    }

    function createItem(e) {
        e.preventDefault();

        dispatch(CrudItemReducer.storeItem(
            ItemCrudActionCreator.storeItem(key, subKey, name)
        ));
    }

    function clearForm() {
        setKey('');
        setSubKey('');
        setName('');
    }

    return (
        <>
            <Container className='content'>
                <form action="/home/bohdan/projects/organizer-front/public" onSubmit={createItem}>
                    <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='key'>
                                    <span className='label'>Item's key</span>
                                </FormLabel>
                                <NumberInput id='key' name='key' value={key} onChange={setKey}>
                                    <NumberInputField />
                                </NumberInput>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='subKey'>
                                    <span className='label'>Item's sub key</span>
                                </FormLabel>
                                <NumberInput id='subKey' name='subKey' value={subKey} onChange={setSubKey}>
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
                                <Input id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                        </Box>
                        <Box style={{marginTop: 25}}>
                            <Button colorScheme='teal' size='md' type='submit'>
                                Create
                            </Button>
                        </Box>
                    </SimpleGrid>
                </form>
            </Container>
        </>
    );
}