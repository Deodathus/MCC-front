import RecipeTreeIngredientTotalComponent from "./RecipeTreeIngredientTotalComponent";

export default function RecipeTreeIngredientsTotalComponent(props) {
    const ingredients = props.ingredients;

    function countTotal(ingredients) {
        const total = {};
        let totalFromIngredient = {};

        // @TODO: fetch items if they are not in redux storage (only items that are needed)

        ingredients.forEach(ingredient => {
            if (total[ingredient.itemId] > 0) {
                total[ingredient.itemId] = {
                    name: ingredient.itemName,
                    amount: ingredient.amount + total[ingredient.itemId].amount
                }
            } else {
                total[ingredient.itemId] = {
                    name: ingredient.itemName,
                    amount: ingredient.amount
                }
            }

            if (ingredient.asResult && ingredient.asResult.length > 0) {
                totalFromIngredient = countTotal(ingredient.asResult);

                Object.keys(totalFromIngredient).forEach(key => {
                    if (key in total) {
                        total[key] = {
                            name: total[key].name,
                            amount: totalFromIngredient[key].amount + total[key].amount
                        }
                    } else {
                        total[key] = {
                            name: totalFromIngredient[key].name,
                            amount: totalFromIngredient[key].amount
                        };
                    }
                });
            }
        });

        return total;
    }

    let totalIngredientsCount = countTotal(ingredients);

    let totalIngredients = Object.keys(totalIngredientsCount).map(key => {
        return <RecipeTreeIngredientTotalComponent key={key} item={totalIngredientsCount[key]} />
    });

    return (
        <>
            {totalIngredients}
        </>
    );
}
