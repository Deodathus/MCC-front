
import axios from "axios";

export default function () {
    return axios.get('http://lil-develo.com/api/minecraft/item')
    .then(response => response.data);
}