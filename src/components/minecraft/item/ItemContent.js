import {Component} from "react";
import {Button, Container, Flex, Spacer} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

export default class ItemContent extends Component {
    constructor(props) {
        super(props);

        this.contentCss = this.props.contentCss;
    }

    render() {
        return (
            <>
                <Container style={this.contentCss}>
                    <Flex>
                        <Spacer />
                        <Link to='/items/create'>
                            <Button colorScheme='teal' size='lg'>
                                Add item
                            </Button>
                        </Link>
                    </Flex>
                    <Outlet />
                </Container>
            </>
        );
    }
}