import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import DemoForm from './demo_form';

const user = {
    email: 'somemail@text.com',
}

const App = () => (
    <div>
        <div className="app">
            <DemoForm email={ user.email }/>
        </div>
    </div>
);

export default App;
