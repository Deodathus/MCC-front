
import React from "react";

import Header from "./Header";
import IndexContent from "./IndexContent";
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
            <IndexContent />
            <Footer year={data.general.year} />
        </>
    );
}