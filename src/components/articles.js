import React from 'react';
import ArticleOne from './article_one';
import ArticleTwo from './article_two';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default props => {
   return (
       <Router>
            <div>
                <ul>
                    <li> 
                    <Link to='/articles/article_one'>Article One</Link>
                    </li>
                </ul>
                <ul>
                <Link to='/articles/article_two'>Article One</Link>
                </ul>

                <Route path="/articles/article_one" component={ArticleOne}/>
                <Route path="/articles/article_two" component={ArticleTwo}/>
            </div>
       </Router>
   )
   
}