import Environment from "../../config/Environment";

export default function() {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.PROD.value:
            host = 'http://lil-develo.com/';

            break;
        default:
        case Environment.DEV.value:
            host = 'http://127.0.0.1:8080/';
            break;
    }

    return {
        item: {
            fetch: host + 'api/minecraft/item',
            fetchOne: host + 'api/minecraft/item/{id}',
            store: host + 'api/minecraft/item'
        },
        recipe: {
            store: host + 'api/minecraft/recipe'
        }
    };
}
