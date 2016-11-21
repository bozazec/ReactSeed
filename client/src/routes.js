import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AboutPage from './components/about/aboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AboutPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
