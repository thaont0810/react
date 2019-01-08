import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './ToDo';
import * as serviceWorker from './serviceWorker';

const Tasks = [
    'Finish Redux Tutorials',
    'Learn more about Relay',
    'Build 5 more React apps',
    'Review React Component Lifecycle',
    'Obtain Data Visualization Certificate',
    'Review Algorithms',
]

ReactDOM.render(<ToDo tasks = {Tasks}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
