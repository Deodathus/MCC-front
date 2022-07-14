
import {Button, Container, Flex, Spacer} from "@chakra-ui/react";
import {Link, useSearchParams} from "react-router-dom";
import {Outlet} from "react-router";
import { useDispatch } from "react-redux";
import CrudItemReducer from "../../../reducers/item/CrudItemReducer";
import {useEffect} from "react";
import ItemList from "./ItemList";
import ItemCrudActionCreator from "../../../actions/item/ItemCrudActionCreator";

export default function ItemContent() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(CrudItemReducer.fetchAll(
            ItemCrudActionCreator.fetchAll(searchParams.get('searchPhrase'))
        ))
    });

    return (
        <>
            <Container className='content'>
                <Flex>
                    <Spacer />
                    <Link to='/items/create'>
                        <Button colorScheme='teal' size='sm'>
                            Add item
                        </Button>
                    </Link>
                </Flex>

                <ItemList />

                <Outlet />
            </Container>
        </>
    );
}