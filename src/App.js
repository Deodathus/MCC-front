import './App.css';

import IndexLayout from "./components/IndexLayout";
import ItemLayout from "./components/minecraft/item/ItemLayout";

import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";

function App() {
    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <IndexLayout />
                </Route>
                <Route path='/item'>
                    <ItemLayout />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
