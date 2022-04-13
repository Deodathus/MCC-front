import axios from "axios";
import minecraft from "../../../../dictionaries/routes/api/minecraft";

export default function StoreItem(key, subKey, name) {
    let api = minecraft();

    axios.post(api.item.store, {
        key: parseInt(key),
        subKey: parseInt(subKey),
        name
    })
    .then();
}