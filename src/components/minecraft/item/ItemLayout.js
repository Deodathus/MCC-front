import {Component} from "react";
import ItemContent from "./ItemContent";
import Header from "../../Header";
import Footer from "../../Footer";

export default class ItemLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <ItemContent contentCss={this.props.contentCss} />
                <Footer year={2022} />
            </>
        );
    }
}