import {Box, FormControl, FormLabel, NumberInput, NumberInputField, SimpleGrid} from "@chakra-ui/react";
import ItemSelectComponent from "./ItemSelectComponent";
import {useState} from "react";

export default function RecipeSelectItemsForIngredientComponent(props) {
    const ingredientKey = props.ingredientKey;
    const [selectedIngredients, setSelectedIngredients] = useState(null);
    const [ingredientAmountInputs, setIngredientAmountInputs] = useState();

    function displayAmountInputForIngredient(value) {
        let result;

        result = value.map((item, key) => {
            return (
                <FormControl key={item.value + key} style={{marginTop: 10}}>
                    <FormLabel htmlFor={'ingredient-' + item.value}>
                        <span className="label"> { item.label + ' amount:' } </span>
                    </FormLabel>
                    <NumberInput style={{marginTop: 10}} id={'ingredient-' + item.value} name={'ingredient-' + item.value + '-' + ingredientKey}>
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

    return (
        <>
            <FormControl style={{marginTop: 10}}>
                <FormLabel>
                    <span className='label'>Recipe ingredients</span>
                </FormLabel>
                <ItemSelectComponent selectedOptions={selectedIngredients} onChange={displayAmountInputForIngredient} />
            </FormControl>
            <SimpleGrid columns={{sm: 2, md: 2, lg: 3}} spacing={10}>
                <Box className='ingredientAmountBox'>
                    { ingredientAmountInputs }
                </Box>
            </SimpleGrid>
        </>
    );
}
