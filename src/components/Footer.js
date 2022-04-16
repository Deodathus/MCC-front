import {Center, Container, Divider} from "@chakra-ui/react";
import organizer from "../dictionaries/routes/organizer";

export default function Footer(props) {
    return (
        <>
            <Divider/>
            <Container width='100%' maxH={80}>
                <Center>
                    Lil Develo © {props.year} <a style={{marginLeft: 15}} href={organizer()}>Organizer</a>
                </Center>
            </Container>
        </>
    );
}