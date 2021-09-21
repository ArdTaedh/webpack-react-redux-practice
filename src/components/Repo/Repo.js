import React from 'react';

import './Repo.scss'

const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header__name">{repo.name}</div>
                <div className="repo-header__stars">{repo.stargazers_count}</div>
            </div>
            <div className="last-commit">{repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Repo Link</a>
        </div>
    );
};

export default Repo;