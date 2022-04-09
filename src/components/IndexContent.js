import {Center, Container} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function IndexContent(props) {
    const padding = {
        paddingTop: '50%'
    };

    return (
        <>
            <Container style={props.contentCss}>
                <Center style={padding}>
                    <Link to='/item'> Calculate your craft!</Link>
                </Center>
            </Container>
        </>
    );
}