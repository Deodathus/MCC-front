import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid
} from "@chakra-ui/react";

import {useState} from "react";
import ItemSelectComponent from "./ItemSelectComponent";

export default function RecipeCreateForm() {

    const [name, setName] = useState('');

    function createRecipe(e) {
        e.preventDefault();

        console.log('createRecipe');
    }

    return (
        <>
            <Container className='content'>
                <form action="/" onSubmit={createRecipe}>
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
                            <Button colorScheme='teal' size='md' type='submit'>
                                Create
                            </Button>
                        </Box>

                    </SimpleGrid>

                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='subKey'>
                                    <span className='label'>Recipe results</span>
                                </FormLabel>
                                <ItemSelectComponent />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='key'>
                                    <span className='label'>Recipe ingredients</span>
                                </FormLabel>
                                <ItemSelectComponent />
                            </FormControl>
                        </Box>

                    </SimpleGrid>
                </form>
            </Container>
        </>
    );
}
