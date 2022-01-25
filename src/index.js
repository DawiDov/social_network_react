import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/mobx/redux-store';


export let renderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state}
        dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
    document.getElementById('root'))
}


renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);

});

reportWebVitals();
 