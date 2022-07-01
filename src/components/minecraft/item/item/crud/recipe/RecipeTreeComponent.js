import {SimpleGrid} from "@chakra-ui/react";
import RecipeTreeIngredientsComponent from "./recipeTree/RecipeTreeIngredientsComponent";
import RecipeTreeIngredientsTotalComponent from "./total/RecipeTreeIngredientsTotalComponent";

export default function RecipeTreeComponent(props) {
    const isTreeCalculated = props.treeCalculated;
    const recipe = props.treeRecipe;

    if (isTreeCalculated) {
        return (
            <>
                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}} className='pdt10'>
                    <RecipeTreeIngredientsComponent ingredients={recipe.ingredients} />
                    <SimpleGrid columns={{sm: 1, md: 1, lg: 1}} className='pdt10'>
                        <span className='itemShowLabel'>Total ingredients:</span>
                        <RecipeTreeIngredientsTotalComponent ingredients={recipe.ingredients} />
                    </SimpleGrid>
                </SimpleGrid>
            </>
        );
    }
}