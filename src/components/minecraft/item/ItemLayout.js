
import Header from "../../Header";
import NavLinks from "../../NavLinks";
import {Container} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Footer from "../../Footer";
import React from "react";

export default function ItemLayout() {
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
                <Outlet />
            </Container>
            <Footer year={data.general.year} />
        </>
    );
}
