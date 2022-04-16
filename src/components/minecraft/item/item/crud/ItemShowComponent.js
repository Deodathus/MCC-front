import {useParams} from "react-router";

import {Container} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export default function ItemShowComponent() {
    const {itemId} = useParams();
    const item = useSelector(state => state.items.elements);

    return (
        <>
            <Container className='content'>

            </Container>
        </>
    );
}
