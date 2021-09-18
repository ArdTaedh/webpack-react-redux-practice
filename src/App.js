import React from 'react';

import './App.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "./store/reposReducers";

const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    const countHandler = () => {
        dispatch(setCount(5))
    }

    return (
        <div className='app'>
            <button onClick={countHandler}>Count</button>
            <div>{count}</div>
        </div>
    );
};

export default App;