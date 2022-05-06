import minecraft from "../../../../dictionaries/routes/api/minecraft";
import axios from "axios";

export default function FetchItem(id) {
    const api = minecraft();

    return axios.get(api.item.fetchOne.replace('{id}', id));
}
