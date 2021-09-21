import React, {useEffect} from 'react';

import './Main.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../store/actions/repos";
import Repo from "../Repo/Repo";

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <div>
            {repos.map(repo => <Repo repo={repo}/>)}
        </div>
    );
};

export default Main;