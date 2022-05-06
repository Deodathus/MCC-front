import {SimpleGrid} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import ItemComponent from "./ItemComponent";
import {useState} from "react";
import Statuses from "../../../dictionaries/actions/item/Statuses";
import ItemSkeletonComponent from "./ItemSkeletonComponent";

export default function ItemList() {
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

    let itemsComponents = [];

    if (items.length <= 0 || status === Statuses.loading) {
        for (let i = 0; i < 60; i++) {
            itemsComponents.push(<ItemSkeletonComponent key={i} />);
        }
    }

    if (status === Statuses.finished) {
        itemsComponents = Object.values(items).map((item, index) => {
            const key = item.id ?? index;

            return <ItemComponent key={key} item={item} />;
        });
    }

    return (
        <>
            <SimpleGrid columns={{sm: 6, md: 12}}>
                { itemsComponents }
            </SimpleGrid>
        </>
    );
}
