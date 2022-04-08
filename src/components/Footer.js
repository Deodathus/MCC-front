import {Center, Container, Divider} from "@chakra-ui/react";

export default function Footer(props) {
    return (
        <>
            <Divider/>
            <Container width='100%' maxH={80}>
                <Center>
                    Lil Develo © {props.year}
                </Center>
            </Container>
        </>
    );
}