import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ga from 'react-ga';

// eslint-disable-next-line
import Styles from './scss/styles.scss';

// Pages
import App from './components/App.jsx';

ga.initialize('UA-81828512-1');

function logPageView() {
    ga.pageview(window.location.pathname);
}

render((
    <Router history={browserHistory} onUpdate={logPageView}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));