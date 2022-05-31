import {SimpleGrid} from "@chakra-ui/react";
import RecipeTreeIngredientsComponent from "./recipeTree/RecipeTreeIngredientsComponent";

export default function RecipeTreeComponent(props) {
    const isTreeCalculated = props.treeCalculated;
    const recipe = props.treeRecipe;

    if (isTreeCalculated) {
        return (
            <>
                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} className='pdt10'>
                    <RecipeTreeIngredientsComponent ingredients={recipe.ingredients} />
                </SimpleGrid>
            </>
        );
    }
}