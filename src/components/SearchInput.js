
import {IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useNavigate} from "react-router";

export default function SearchInput() {
    const [searchPhrase, setSearchPhrase] = useState();

    const navigate = useNavigate();

    function search() {
        if (searchPhrase.length > 0) {
            let urlToNavigate = '/items?searchPhrase=' + searchPhrase;

            navigate(urlToNavigate);
        }
    }

    return (
        <>
            <InputGroup size='md'>
                <Input pr='1.5rem' placeholder='search for item' name='searchPhrase' onChange={event => {setSearchPhrase(event.target.value)}} />
                <InputRightElement width='3rem'>
                    <IconButton onClick={search} aria-label='search for item' size='sm' icon={<SearchIcon />} />
                </InputRightElement>
            </InputGroup>
        </>
    );
}