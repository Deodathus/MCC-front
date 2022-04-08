import {Box, Container, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import {Component} from "react";

export default class Header extends Component {


    render() {
        const titleCss = {
            color: '#4A5568'
        };

        return (
            <>
                <Container maxW='full' maxH={150}>
                    <SimpleGrid columns={{sm: 1, md: 2, lg: 2}} m={15}>
                        <Box>
                            <Heading as='h3' size='lg' style={titleCss}>
                                Minecraft Craft Calculator
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
}