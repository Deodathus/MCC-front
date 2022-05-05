import {useDisclosure} from "@chakra-ui/hooks";
import RecipeModal from "./RecipeModal";
import ItemRecipeComponent from "./ItemRecipeComponent";

export default function ItemRecipeWithModalComponent(props) {
    const recipe = props.recipe;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <RecipeModal recipe={recipe} isOpen={isOpen} onClose={onClose} />

            <ItemRecipeComponent recipe={recipe} onClick={onOpen} />
        </>
    );
}
