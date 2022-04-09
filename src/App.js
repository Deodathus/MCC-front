import './App.css';

import IndexLayout from "./components/IndexLayout";
import ItemLayout from "./components/minecraft/item/ItemLayout";

import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";

function App() {
    const contentCss = {
        minHeight: 'calc(100vh - 80px)',
        width: '100%'
    };

    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IndexLayout contentCss={contentCss}/>} />
                <Route path='/item' element={<ItemLayout contentCss={contentCss} />} />
            </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
