import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './home';
import About from './about';
import Article from './articles';


const App = () => (

    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/books">Article</Link>
                </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/books" component={Article}/>
        </div>
    </Router>
);

export default App;
