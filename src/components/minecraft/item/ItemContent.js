import {Component} from "react";
import {Center, Container, Heading} from "@chakra-ui/react";

export default class ItemContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container style={this.props.contentCss}>
                    <Center>
                        <Heading as='h2'>
                            Item content
                        </Heading>
                    </Center>
                </Container>
            </>
        );
    }
}