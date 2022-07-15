import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import ItemRecipeComponent from "./ItemRecipeComponent";
import RecipeCalculateComponent from "../../../recipe/calculator/RecipeCalculateComponent";
import {useState} from "react";
import RecipeCalculateService from "../../../../../services/minecraft/calculator/RecipeCalculateService";
import RecipeTreeComponent from "../../calculation/crud/recipe/RecipeTreeComponent";

export default function RecipeModal(props) {
    const [recipe, setRecipe] = useState(props.recipe);
    const [treeRecipe, setTreeRecipe] = useState();

    const [treeCalculated, setTreeCalculated] = useState(false);

    const isModalOpen = props.isOpen;
    const onClose = props.onClose;

    const [calculateAmount, setCalculateAmount] = useState(1);

    async function calculate() {
        const response = await RecipeCalculateService.calculateRecipe(recipe.id, calculateAmount)
            .catch(error => {});
        const result = response.data;

        const recipeCopy = {...recipe};
        recipeCopy.ingredients = result.ingredients;
        recipeCopy.results = result.results;

        setRecipe(recipeCopy);
    }

    async function calculateTree() {
        await calculate();

        const response = await RecipeCalculateService.calculateRecipeTree(recipe.id, calculateAmount)
            .catch(error => {});
        const result = response.data;

        setTreeCalculated(true);
        setTreeRecipe(result);
    }

    return (
        <>
            <Modal isOpen={isModalOpen} size='5xl' onClose={onClose} isCentered scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>

                    <ModalHeader>
                        <span className='recipeModalHeader'>
                            { recipe.name + ' calculation' }
                        </span>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>

                        <ItemRecipeComponent recipe={recipe} />

                        <RecipeCalculateComponent defaultValue={calculateAmount} setCalculationAmount={setCalculateAmount} />

                        <RecipeTreeComponent treeRecipe={treeRecipe} treeCalculated={treeCalculated} />

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='yellow' onClick={calculateTree}>
                            Calculate tree
                        </Button>

                        <Button colorScheme='green' ml={3} onClick={calculate}>
                            Calculate
                        </Button>

                        <Button colorScheme='blue' ml={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    );
}
