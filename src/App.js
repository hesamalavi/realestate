import React from 'react';
import './App.css';

import Home from './pages/Home';
import Properties from './pages/Properties';
import Property from './pages/Property';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/properties/" component={Properties} />
                <Route exact path="/properties/:slug" component={Property} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
