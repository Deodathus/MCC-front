import {Component} from "react";
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

import CreateItem from '../../../../../services/minecraft/item/crud/CreateItem';

export default class ItemCreateForm extends Component {
    constructor(props) {
        super(props);

        this.testFormSubmit = this.testFormSubmit.bind(this);
    }

    testFormSubmit(e) {
        e.preventDefault();

        console.log(e.target.key.value);
        console.log(e.target.subKey.value);
        console.log(e.target.name.value);
    }

    render() {
        return (
            <>
                <Container style={this.props.contentCss}>
                    <form action="/" onSubmit={this.testFormSubmit}>
                        <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} spacing={10}>

                            <Box>
                                <FormControl>
                                    <FormLabel htmlFor='key'>
                                        <span className='label'>Item's key</span>
                                    </FormLabel>
                                    <NumberInput id='key' name='key'>
                                        <NumberInputField />
                                    </NumberInput>
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl>
                                    <FormLabel htmlFor='subKey'>
                                        <span className='label'>Item's sub key</span>
                                    </FormLabel>
                                    <NumberInput id='subKey' name='subKey'>
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
                                    <Input id='name' name='name' />
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
}