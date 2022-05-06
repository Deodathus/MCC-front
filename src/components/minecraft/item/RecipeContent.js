import {Button, Container, Flex, Spacer} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

export default function RecipeContent() {
    return (
        <>
            <Container className='content'>
                <Flex>
                    <Spacer />
                    <Link to='/recipes/create'>
                        <Button colorScheme='teal' size='sm'>
                            Add recipe
                        </Button>
                    </Link>
                </Flex>

                <Outlet />
            </Container>
        </>
    );
}
