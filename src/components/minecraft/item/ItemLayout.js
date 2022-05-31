
import Header from "../../Header";
import NavLinks from "../../NavLinks";
import {Container} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Footer from "../../Footer";
import React from "react";

export default function ItemLayout(props) {
    const generalData = props.generalData;

    return (
        <>
            <Header version={generalData.version} />
            <NavLinks />
            <Container className='content'>
                <Outlet />
            </Container>
            <Footer year={generalData.year} />
        </>
    );
}
