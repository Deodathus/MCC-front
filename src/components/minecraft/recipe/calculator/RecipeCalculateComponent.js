import {
    Box,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";

export default function RecipeCalculateComponent(props) {
    const setCalculationAmount = props.setCalculationAmount;
    const defaultValue = props.defaultValue;

    return (
        <>
            <Box className='pdt10'>
                <span>
                    Amount:
                </span>
                <NumberInput min={1} defaultValue={defaultValue} size='sm' maxW='200' onChange={(v) => setCalculationAmount(v)}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Box>
        </>
    );
}
