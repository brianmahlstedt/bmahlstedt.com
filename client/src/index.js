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
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/logos">Logos</NavLink></li>
                    <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
                </ul>
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
