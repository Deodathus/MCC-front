import {Box, Container, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function NavLinks() {
    return (
        <>
            <Container maxW='full' maxH={150}>
                <SimpleGrid columns={{sm: 4, md: 6, lg: 12}} m={15}>
                    <Box>
                        <Heading as='h5' size='sm'>
                            <Link className='heading' to='/items'>Items</Link>
                        </Heading>
                    </Box>
                </SimpleGrid>
            </Container>

            <Divider/>
        </>
    );
}