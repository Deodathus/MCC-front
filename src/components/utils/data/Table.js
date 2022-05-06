import {Center, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useState} from "react";
import {useSelector} from "react-redux";
import Statuses from "../../../dictionaries/actions/item/Statuses";

export default function(props) {
    const elementKey = props.elementKey;
    const withOptions = props.withOptions;

    const [status, setStatus] = useState(Statuses.loading);

    useSelector(state => {
        switch (state[elementKey]['status']) {
            case Statuses.error:
                if (status !== Statuses.error) {
                    setStatus(Statuses.error);
                }

                break;
            default:
            case Statuses.loading:
                if (status !== Statuses.loading) {
                    setStatus(Statuses.loading)
                }

                break;
            case Statuses.finished:
                if (status !== Statuses.finished) {
                    setStatus(Statuses.finished);
                }

                break;
        }
    });

    const elements = useSelector(state => state[elementKey].elements);

    if (status === Statuses.loading) {
        return (
            <>

                <Center><Spinner size='xl' /></Center>

                <Center className='margin-top'>Loading...</Center>
            </>
        );
    }

    if (status === Statuses.error) {
        return (
            <>
                <Center className='margin-top'>
                    Unfortunately, an error occurred during data fetching
                </Center>
            </>
        );
    }

    let keys = [];

    let tableContent;
    let tableHeaders;

    tableContent = Object.values(elements).map((element, index) => {
        if (keys.length === 0) {
            keys = Object.keys(element);
        }

        if (element['id']) {
            index = element['id'];
        }

        return (
            <Tr key={index}>
                {
                    keys.map(function (objectKey, index) {
                        return (
                            <Td key={index}>
                                { element[objectKey] }
                            </Td>
                        )
                    })
                }
            </Tr>
        );
    });

    if (withOptions) {
        keys.push('options');
    }

    tableHeaders = keys.map((key, index) => {
        return <Th key={index}>{key}</Th>
    });

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            { tableHeaders }
                        </Tr>
                    </Thead>
                    <Tbody>
                        { tableContent }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}