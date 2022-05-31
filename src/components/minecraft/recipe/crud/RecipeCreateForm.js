import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    Spacer
} from "@chakra-ui/react";

import {useEffect, useState} from "react";
import ItemSelectComponent from "./ItemSelectComponent";
import CrudItemReducer from "../../../../reducers/item/CrudItemReducer";
import {useDispatch} from "react-redux";
import RecipeCrudActionCreator from "../../../../actions/recipe/RecipeCrudActionCreator";

export default function RecipeCreateForm() {
    const [name, setName] = useState('');

    const [ingredientAmountInputs, setIngredientAmountInputs] = useState();
    const [recipeResultAmountInputs, setRecipeResultAmountInputs] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CrudItemReducer.fetchAll)
    });

    function createRecipe(e) {
        e.preventDefault();

        const ingredients = [];
        const recipeResults = [];

        Object.values(e.target).forEach((item) => {
            if (item.name) {
                if (item.name.includes('ingredient')) {
                    let itemId = parseInt(item.name.split('-')[1]);

                    ingredients.push({
                        itemId: itemId,
                        amount: parseInt(item.value)
                    });
                } else if (item.name.includes('recipeResult')) {
                    let itemId = parseInt(item.name.split('-')[1]);

                    recipeResults.push({
                        itemId: itemId,
                        amount: parseInt(item.value)
                    });
                }
            }
        });

        dispatch(RecipeCrudActionCreator.storeRecipe(name, ingredients, recipeResults));
    }

    function displayAmountInputForIngredient(value) {
        let result;

        result = value.map((item) => {
            return (
                <FormControl key={item.value}>
                    <FormLabel htmlFor={'ingredient-' + item.value}>
                        <span className="label"> { item.label + ' amount:' } </span>
                    </FormLabel>
                    <NumberInput style={{marginTop: 10}} id={'ingredient-' + item.value} name={'ingredient-' + item.value}>
                        <NumberInputField />
                    </NumberInput>
                </FormControl>
            );
        });

        setIngredientAmountInputs(result);
    }

    function displayAmountInputForRecipeResult(value) {
        let result;

        result = value.map((item) => {
            return (
                <FormControl key={item.value}>
                    <FormLabel htmlFor={'recipeResult-' + item.value}>
                        <span className="label"> { item.label + ' amount:' } </span>
                    </FormLabel>
                    <NumberInput style={{marginTop: 10}} id={'recipeResult-' + item.value} name={'recipeResult-' + item.value}>
                        <NumberInputField />
                    </NumberInput>
                </FormControl>
            );
        });

        setRecipeResultAmountInputs(result);
    }

    return (
        <>
            <Container className='content'>
                <form action="/home/bohdan/projects/organizer-front/public" onSubmit={createRecipe}>
                    <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='name'>
                                    <span className="label">Item's name</span>
                                </FormLabel>
                                <Input id='name' name='name' onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                        </Box>

                    </SimpleGrid>

                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='key'>
                                    <span className='label'>Recipe ingredients</span>
                                </FormLabel>
                                <ItemSelectComponent onChange={displayAmountInputForIngredient} />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='subKey'>
                                    <span className='label'>Recipe results</span>
                                </FormLabel>
                                <ItemSelectComponent onChange={displayAmountInputForRecipeResult} />
                            </FormControl>
                        </Box>

                    </SimpleGrid>

                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} spacing={10} style={{marginTop: 25}}>

                        <SimpleGrid columns={{sm: 2, md: 2, lg: 3}} spacing={10}>
                            <Box className='ingredientAmountBox'>
                                { ingredientAmountInputs }
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid columns={{sm: 2, md: 2, lg: 3}} spacing={10}>
                            <Box className='recipeResultAmountBox'>
                                { recipeResultAmountInputs }
                            </Box>
                        </SimpleGrid>

                    </SimpleGrid>

                    <Flex>

                        <Box>

                        </Box>

                        <Spacer />

                        <Box style={{marginTop: 25}}>
                            <Button colorScheme='teal' size='md' type='submit'>
                                Create
                            </Button>
                        </Box>

                    </Flex>
                </form>
            </Container>
        </>
    );
}
