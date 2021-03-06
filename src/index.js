import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';
import logo from './logo.svg';

const auth = new Auth();
let username = auth.getProfile().given_name || 'User';
let userimage = auth.getProfile().picture || logo;

let state = {};
window.setState = changes => {
	state = Object.assign({}, state, changes);
	ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0 */
let initialState = {
	name: username,
	userimage: userimage,
	location: location.pathname.replace(/^\/?|\/$/g, ''),
	auth
};

window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
