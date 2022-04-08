import {Center, Container} from "@chakra-ui/react";

export default function Content() {
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
                    Calculate your craft!
                </Center>
            </Container>
        </>
    );
}