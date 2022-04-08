import {Component} from "react";
import {IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <InputGroup size='md'>
                    <Input pr='1.5rem' placeholder='search for item'/>
                    <InputRightElement width='3rem'>
                        <IconButton aria-label='search for item' size='sm' icon={<SearchIcon />} />
                    </InputRightElement>
                </InputGroup>
            </>
        );
    }
}