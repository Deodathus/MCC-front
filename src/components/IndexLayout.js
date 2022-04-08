
import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function IndexLayout() {
    const data = {
        general: {
            year: 2022
        }
    };

    return (
        <>
            <Header />
            <Content />
            <Footer year={data.general.year} />
        </>
    );
}