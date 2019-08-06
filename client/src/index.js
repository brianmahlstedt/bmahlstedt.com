import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, NavLink, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import store from './store';
import { Home, Logos, Blog, NotFound } from './components';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Provider store={store}>
            <div>
                <button type="button" className="btn btn-link">
                    <NavLink exact activeClassName="btn btn-dark" to="/">
                        Home
                    </NavLink>
                </button>
                <button type="button" className="btn btn-link">
                    <NavLink exact activeClassName="btn btn-dark" to="/logos">
                        Teams
                    </NavLink>
                </button>
                <button type="button" className="btn btn-link">
                    <NavLink exact activeClassName="btn btn-dark" to="/blog">
                        Blog
                    </NavLink>
                </button>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/logos" component={Logos} />
                    <Route path="/blog" component={Blog} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Provider>
    </Router>,
    document.getElementById('root')
);
