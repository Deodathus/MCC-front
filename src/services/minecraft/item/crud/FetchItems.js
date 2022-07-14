
import axios from "axios";
import minecraft from "../../../../dictionaries/routes/api/minecraft";

export default function FetchItems(searchPhrase = null, page = 1, perPage = 60) {
    let api = minecraft();

    return axios.get(api.item.fetch,
        {
            params: {
                page,
                perPage,
                searchPhrase
            }
        });
}