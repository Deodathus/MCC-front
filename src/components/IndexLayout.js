
import React from "react";

import Footer from "./Footer";
import {Outlet} from "react-router";
import Header from "./Header";
import {Container} from "@chakra-ui/react";
import NavLinks from "./NavLinks";
import MainPageContent from "./MainPageContent";

export default function IndexLayout() {
    const data = {
        general: {
            year: 2022
        }
    };

    return (
        <>
            <Header />
            <NavLinks />
            <Container className='content'>
                <MainPageContent />
                <Outlet />
            </Container>
            <Footer year={data.general.year} />
        </>
    );
}