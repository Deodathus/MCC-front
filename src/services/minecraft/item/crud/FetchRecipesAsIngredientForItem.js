import minecraft from "../../../../dictionaries/routes/api/minecraft";
import axios from "axios";

export default function FetchRecipesAsIngredientForItem(itemId) {
    const api = minecraft();

    return axios.get(api.item.fetchRecipesAsIngredient.replace('{id}', itemId));
}
