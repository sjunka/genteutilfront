// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Router imports
import { HashRouter } from 'react-router-dom' 


//UI Imports
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

//Wrapping App component into BrowserRouter for routing the aplication
const app = (
    <HashRouter>
        <App />
    </HashRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
