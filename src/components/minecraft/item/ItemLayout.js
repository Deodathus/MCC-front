import {Component} from "react";
import ItemContent from "./ItemContent";
import Header from "../../Header";
import Footer from "../../Footer";

export default class ItemLayout extends Component {
    render() {
        return (
            <>
                <Header />
                <ItemContent />
                <Footer year={2022} />
            </>
        );
    }
}