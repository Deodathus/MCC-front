
import axios from "axios";
import minecraft from "../../../../dictionaries/routes/api/minecraft";

export default function FetchItems() {
    let api = minecraft();

    return axios.get(api.item.fetch);
}