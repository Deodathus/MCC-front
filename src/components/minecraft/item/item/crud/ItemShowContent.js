import {useParams} from "react-router";

import {Container, SimpleGrid} from "@chakra-ui/react";
import ItemComponent from "./ItemComponent";

export default function ItemShowContent() {
    const { itemId } = useParams();

    return (
        <>
            <Container className='content'>
                <SimpleGrid columns={{sm:3, md: 3, lg: 3}}>
                    <ItemComponent itemId={itemId} />
                </SimpleGrid>
            </Container>
        </>
    );
}
