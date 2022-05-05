import minecraft from "../../../dictionaries/routes/api/minecraft";
import axios from "axios";

async function calculateRecipe(recipeId, amount) {
    const api = minecraft();

    return axios.get(api.calculator.calculate.replace('{id}', recipeId),
    {
       params: {
           amount
       }
    });
}

export default {
    calculateRecipe
};
