import './App.css';

import React from "react";
import Router from "./Router";

import './App.css';

import { Provider } from "react-redux";
import Store from "./Store";

function App() {
    return (
      <>
          <Provider store={Store}>
            <Router />
          </Provider>
      </>
    );
}

export default App;
