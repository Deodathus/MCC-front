import minecraft from "../../../../dictionaries/routes/api/minecraft";
import axios from "axios";

export default function DeleteItem(itemId) {
    let api = minecraft();

    axios.delete(api.item.delete.replace('{id}', itemId))
        .then();
}
