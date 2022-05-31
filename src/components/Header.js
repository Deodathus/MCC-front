import {Badge, Box, Container, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";

export default function Header(props) {
    const titleCss = {
        color: '#4A5568'
    };
    const version = props.version;

    return (
        <>
            <Container maxW='full' maxH={150}>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 2}} m={15}>
                    <Box>
                        <Heading as='h3' size='lg' style={titleCss}>
                            <Link to='/'>Minecraft Craft Calculator</Link> <Badge colorScheme='purple'>v{version}</Badge>
                        </Heading>
                    </Box>
                    <Box>
                        <SearchInput />
                    </Box>
                </SimpleGrid>
            </Container>

            <Divider/>
        </>
    );
}