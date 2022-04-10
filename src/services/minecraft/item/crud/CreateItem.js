import axios from "axios";

export default function(key, subKey, name) {
    axios.post('http://lil-develo.com/api/minecraft/item', {
        key: parseInt(key),
        subKey: parseInt(subKey),
        name
    })
    .then();
}