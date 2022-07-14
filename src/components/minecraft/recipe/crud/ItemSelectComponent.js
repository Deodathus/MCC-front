
import AsyncSelect from "react-select/async";
import { useSelector } from "react-redux";
import {useState} from "react";
import Statuses from "../../../../dictionaries/actions/item/Statuses";
import FetchItems from "../../../../services/minecraft/item/crud/FetchItems";
import ItemsArrayToJsonTransformer from "../../../../services/minecraft/item/transformer/ItemsArrayToJsonTransformer";

export default function ItemSelectComponent(props) {
    const items = useSelector(state => state.items.elements);

    const [status, setStatus] = useState(Statuses.loading);

    useSelector(state => {
        switch (state.items.status) {
            default:
            case Statuses.loading:
                break;
            case Statuses.finished:
                if (status !== Statuses.finished) {
                    setStatus(Statuses.finished);
                }
                break;
        }
    });

    function prepareOptions(items) {
        let result = [];

        if (status === Statuses.finished) {
            Object.values(items).forEach(item => {
                let label = item.name + ' | ' + item.key;
                if (item.subKey) {
                    label += ':' + item.subKey;
                }

                result.push({
                    value: item.id,
                    label: label
                });
            });
        }

        return result;
    }

    async function search(searchPhrase) {
        let searchedItems = await FetchItems(searchPhrase);

        return prepareOptions(ItemsArrayToJsonTransformer(searchedItems.data));
    }

    const options = prepareOptions(items);

    return (
        <>
            <AsyncSelect
                onChange={(e) => props.onChange(e)}
                isMulti
                defaultOptions={options}
                loadOptions={(searchPhrase) => search(searchPhrase)}
            />
        </>
    );
}
