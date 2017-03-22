import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FrontPage from './pages/frontPage/FrontPage';
import About from './pages/about/About';
import Menu from './components/menu/Menu';

ReactDOM.render(
    <Router>
        <div>
            <Menu />
            <Route exact path="/" component={FrontPage} />
            <Route path="/about" component={About} />
        </div>
    </Router>,
    document.getElementById('root')
);
