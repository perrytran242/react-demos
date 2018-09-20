import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import HelloWorld from './hello_world';
import BlueText from './blue_text';


const App = () => (
    <div>
        <HelloWorld team="green team" name="Perry"/>
        <HelloWorld team="green team" name="Mia"/>
        <HelloWorld team="green team" name="Jaytrin"/>
        <HelloWorld team="green team" name="Jonathan"/>
        <BlueText/>
    </div>
);

export default App;
