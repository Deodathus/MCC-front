import {Center, Container} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function IndexContent() {
    const contentCss = {
        minHeight: 'calc(100vh - 80px)',
        width: '100%'
    };

    const padding = {
        paddingTop: '50%'
    };

    return (
        <>
            <Container style={contentCss}>
                <Center style={padding}>
                    <Link to='/item'> Calculate your craft!</Link>
                </Center>
            </Container>
        </>
    );
}