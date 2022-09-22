import minecraft from "../../../../dictionaries/routes/api/minecraft";
import axios from "axios";

export default function FetchRecipesAsResultForItem(itemId, page, perPage) {
    const api = minecraft();

    return axios.get(api.item.fetchRecipesAsResult.replace('{id}', itemId),
        {
            params: {
                page,
                perPage
            }
        });
}