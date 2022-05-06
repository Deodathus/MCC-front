import {useParams} from "react-router";

import {Container, SimpleGrid} from "@chakra-ui/react";
import ItemComponent from "./ItemComponent";
import ItemRecipesComponent from "./recipe/ItemRecipesComponent";

export default function ItemShowContent() {
    const { itemId } = useParams();

    return (
        <>
            <Container className='content'>
                <SimpleGrid columns={{sm:1, md: 3, lg: 3}}>

                    <ItemComponent itemId={itemId} />

                    <ItemRecipesComponent itemId={itemId} />

                </SimpleGrid>
            </Container>
        </>
    );
}
