import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import './App.scss'
import Main from "./components/Main/Main";


const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/">
                    <Main/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;