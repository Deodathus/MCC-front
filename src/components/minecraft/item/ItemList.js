import {Box, SimpleGrid} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import ItemComponent from "./ItemComponent";
import {useState} from "react";
import Statuses from "../../../dictionaries/actions/item/Statuses";
import ItemSkeletonComponent from "./ItemSkeletonComponent";
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

export default function ItemList() {
    const items = useSelector(state => state.items.elements);

    let totalPages = useSelector(state => state.items.pagination.totalPages);
    if (typeof totalPages == 'undefined') {
        totalPages = 1;
    }

    const [status, setStatus] = useState(Statuses.loading);

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useSelector(state => {
        switch (state.items.status) {
            default:
            case Statuses.loading:
                break;
            case Statuses.finished:
                if (status !== Statuses.finished) {
                    setStatus(Statuses.finished);
                }
                break;
        }
    });

    let itemsComponents = [];

    if (items.length <= 0 || status === Statuses.loading) {
        for (let i = 0; i < 60; i++) {
            itemsComponents.push(<ItemSkeletonComponent key={i} />);
        }
    }

    if (status === Statuses.finished) {
        itemsComponents = Object.values(items).map((item, index) => {
            const key = item.id ?? index;

            return <ItemComponent key={key} item={item} />;
        });
    }

    function handlePageChange(event) {
        let urlToNavidate = '/items?page=' + (event.selected + 1);

        if (searchParams.get('searchPhrase') && searchParams.get('searchPhrase').length > 0) {
            urlToNavidate += '&searchPhrase=' + searchParams.get('searchPhrase')
        }

        navigate(urlToNavidate);
    }

    return (
        <>
            <SimpleGrid columns={{sm: 6, md: 12}}>
                { itemsComponents }
            </SimpleGrid>

            <Box className='paginator'>
                <ReactPaginate
                    renderOnZeroPageCount={null}
                    onPageChange={(e) => {handlePageChange(e)}}
                    pageCount={Math.ceil(totalPages)}
                />
            </Box>
        </>
    );
}
