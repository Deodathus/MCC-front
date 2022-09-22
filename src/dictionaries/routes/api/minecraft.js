import Environment from "../../config/Environment";

export default function() {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.PROD.value:
            host = 'https://lil-develo.com/';

            break;
        default:
        case Environment.DEV.value:
            host = 'http://127.0.0.1:8080/';

            break;
    }

    return {
        item: {
            fetch: host + 'api/minecraft/item',
            fetchOne: host + 'api/minecraft/item/{id}',
            fetchRecipes: host + 'api/minecraft/item/{id}/recipes',
            fetchRecipesAsIngredient: host + 'api/minecraft/item/{id}/recipes/asIngredient',
            fetchRecipesAsResult: host + 'api/minecraft/item/{id}/recipes/asResult',
            store: host + 'api/minecraft/item'
        },
        recipe: {
            store: host + 'api/minecraft/recipe'
        },
        calculator: {
            calculate: host + 'api/minecraft/recipe/{id}/calculate',
            calculateTree: host + 'api/minecraft/recipe/{id}/calculate/_tree'
        }
    };
}
