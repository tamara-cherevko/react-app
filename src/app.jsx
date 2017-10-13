import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import FrontPage from './pages/frontPage/FrontPage';
import About from './pages/about/About';
import Menu from './components/menu/Menu';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Menu />
            <Route exact path="/" component={FrontPage} />
            <Route path="/about" component={About} />
        </div>
    </Router>,
    document.getElementById('root')
);
