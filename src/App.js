import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Myself from './components/Myself';
import Projects from './components/Projects';
import Header from './Header';

const App  = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/myself" component={Myself} />
                    <Route path="/projects" component={Projects} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;