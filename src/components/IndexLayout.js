
import React from "react";

import Footer from "./Footer";
import {Outlet} from "react-router";
import Header from "./Header";
import {Container} from "@chakra-ui/react";
import NavLinks from "./NavLinks";
import MainPageContent from "./MainPageContent";

export default function IndexLayout(props) {
    const generalData = props.generalData;

    return (
        <>
            <Header version={generalData.version} />
            <NavLinks />
            <Container className='content'>
                <MainPageContent />
                <Outlet />
            </Container>
            <Footer year={generalData.year} />
        </>
    );
}