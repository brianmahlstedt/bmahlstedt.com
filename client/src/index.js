import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import store from './store';
import { MyNav, Home, Logos, Blog, NotFound } from './components';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Provider store={store}>
            <div>
                <MyNav />
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
