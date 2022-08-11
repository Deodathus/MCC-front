import minecraft from "../../../../dictionaries/routes/api/minecraft";
import axios from "axios";

export default function StoreRecipe(name, ingredients, results) {
    let api = minecraft();

    return axios.post(api.recipe.store, {
        name,
        ingredients,
        results
    });
}
