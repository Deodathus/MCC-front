import axios from "axios";

export default function(key, subKey, name) {
    axios.post('http://localhost:8080/api/minecraft/item', {
        key: parseInt(key),
        subKey: parseInt(subKey),
        name
    })
    .then(response => {
        console.log(response);
    });
}