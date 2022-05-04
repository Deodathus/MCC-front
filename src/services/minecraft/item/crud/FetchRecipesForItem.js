import minecraft from "../../../../dictionaries/routes/api/minecraft";
import axios from "axios";

export default function FetchRecipesForItem(itemId) {
    const api = minecraft();

    return axios.get(api.item.fetchRecipes.replace('{id}', itemId));
}
