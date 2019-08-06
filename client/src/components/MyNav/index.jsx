import React from 'react';
import { NavLink } from 'react-router-dom';

function MyNav() {
    return (
        <div className="row align-items-center justify-content-center">
            <button type="button" className="btn btn-light">
                <NavLink exact activeClassName="btn btn-dark" to="/">
                    Home
                </NavLink>
            </button>
            <button type="button" className="btn btn-light">
                <NavLink activeClassName="btn btn-dark" to="/logos">
                    Teams
                </NavLink>
            </button>
            <button type="button" className="btn btn-light">
                <NavLink activeClassName="btn btn-dark" to="/blog">
                    Blog
                </NavLink>
            </button>
        </div>
    );
}

export default MyNav;
