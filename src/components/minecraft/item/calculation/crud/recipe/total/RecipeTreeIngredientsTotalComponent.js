import RecipeTreeIngredientTotalComponent from "./RecipeTreeIngredientTotalComponent";

export default function RecipeTreeIngredientsTotalComponent(props) {
    const ingredients = props.ingredients;

    function countTotal(ingredients) {
        const total = {};
        let totalFromIngredient = {};

        // @TODO: fetch items if they are not in redux storage (only items that are needed)

        ingredients.forEach(ingredient => {
            let firstIngredient = ingredient[0];

            if (typeof total[firstIngredient.itemId] != 'undefined' && total[firstIngredient.itemId].amount > 0) {
                total[firstIngredient.itemId] = {
                    name: firstIngredient.itemName,
                    amount: firstIngredient.amount + total[firstIngredient.itemId].amount
                }
            } else {
                total[firstIngredient.itemId] = {
                    name: firstIngredient.itemName,
                    amount: firstIngredient.amount
                }
            }

            if (firstIngredient.asResult && firstIngredient.asResult.length > 0) {
                totalFromIngredient = countTotal(firstIngredient.asResult);

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
