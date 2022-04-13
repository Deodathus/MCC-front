
export default function ItemsArrayToJsonTransformer(array) {
    let result = {};

    for (let item of array) {
        result[item.id] = item;
    }

    return result;
}
