import {Box} from "@chakra-ui/react";
import TotalIngredientItemComponent from "./TotalIngredientItemComponent";

export default function RecipeTreeIngredientTotalComponent(props) {
    const item = props.item;

    return (
        <>
            <Box>
                <TotalIngredientItemComponent item={item} />
            </Box>
        </>
    );
}
