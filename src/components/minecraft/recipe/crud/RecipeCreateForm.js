
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
    Spacer, useToast
} from "@chakra-ui/react";

import {useEffect, useState} from "react";
import ItemSelectComponent from "./ItemSelectComponent";
import CrudItemReducer from "../../../../reducers/item/CrudItemReducer";
import {useDispatch, useSelector} from "react-redux";
import RecipeCrudActionCreator from "../../../../actions/recipe/RecipeCrudActionCreator";
import CrudRecipeReducer from "../../../../reducers/recipe/CrudRecipeReducer";
import Statuses from "../../../../dictionaries/actions/process/Statuses";
import ItemCrudActionCreator from "../../../../actions/item/ItemCrudActionCreator";

export default function RecipeCreateForm() {
    const dispatch = useDispatch();
    const toast = useToast();

    const [storeStatus, setStoreStatus] = useState(Statuses.idle);

    const [name, setName] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState(null);
    const [selectedRecipeResults, setSelectedRecipeResults] = useState(null);
    const [ingredientAmountInputs, setIngredientAmountInputs] = useState();
    const [recipeResultAmountInputs, setRecipeResultAmountInputs] = useState();

    useEffect(() => {
        dispatch(CrudItemReducer.fetchAll(
            ItemCrudActionCreator.fetchAll(
                '',
                1,
                400
            )
        ))
    }, []);

    handleStoreStatus();

    function handleStoreStatus() {
        useSelector(state => {
            switch (state.recipes.process.storeOne.status) {
                default:
                case Statuses.idle:
                    break;
                case Statuses.success:
                    if (storeStatus !== Statuses.success) {
                        toast({
                            title: 'Recipe was added',
                            status: "success",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });

                        clearForm();
                    }

                    dispatch(RecipeCrudActionCreator.resetStoreRecipeStatus());

                    break;
                case Statuses.error:
                    if (storeStatus !== Statuses.error) {
                        toast({
                            title: 'Recipe was not added',
                            status: "error",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });
                    }

                    dispatch(RecipeCrudActionCreator.resetStoreRecipeStatus());

                    break;
            }
        });
    }

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

        dispatch(CrudRecipeReducer.storeRecipe(RecipeCrudActionCreator.storeRecipe(name, ingredients, recipeResults)));
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

        let newRawSelectedIngredients = [];
        Object.values(value).forEach(item => {
            newRawSelectedIngredients.push({
                value: item.value,
                label: item.label
            });
        });

        if (newRawSelectedIngredients.length === 0) {
            setSelectedIngredients(null);
        } else {
            setSelectedIngredients(newRawSelectedIngredients);
        }
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

        let newSelectedRecipeResults = [];
        Object.values(value).forEach(item => {
            newSelectedRecipeResults.push({
                value: item.value,
                label: item.label
            });
        });

        if (newSelectedRecipeResults.length === 0) {
            setSelectedRecipeResults(null);
        } else {
            setSelectedRecipeResults(newSelectedRecipeResults);
        }
    }

    function clearForm() {
        setName('');
        setSelectedIngredients(null);
        setSelectedRecipeResults(null);
        setIngredientAmountInputs(null);
        setRecipeResultAmountInputs(null);
    }

    return (
        <>
            <Container className='content'>
                <form action="" onSubmit={createRecipe}>
                    <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='name'>
                                    <span className="label">Recipe's name</span>
                                </FormLabel>
                                <Input id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                        </Box>

                    </SimpleGrid>

                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} spacing={10}>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='key'>
                                    <span className='label'>Recipe ingredients</span>
                                </FormLabel>
                                <ItemSelectComponent selectedOptions={selectedIngredients} onChange={displayAmountInputForIngredient} />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='subKey'>
                                    <span className='label'>Recipe results</span>
                                </FormLabel>
                                <ItemSelectComponent selectedOptions={selectedRecipeResults} onChange={displayAmountInputForRecipeResult} />
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
