import React from 'react';
import { NavLink } from 'react-router-dom';

function MyNav() {
    return (
        <div className="row align-items-center justify-content-center">
            <NavLink exact className="btn btn-light" activeClassName="btn btn-dark" to="/">
                Home
            </NavLink>
            <NavLink className="btn btn-light" activeClassName="btn btn-dark" to="/logos">
                Teams
            </NavLink>
            <NavLink className="btn btn-light" activeClassName="btn btn-dark" to="/blog">
                Blog
            </NavLink>
        </div>
    );
}

export default MyNav;
