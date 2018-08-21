import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import BookStore from './Stores/BookStore';

let bookStore = BookStore.create();

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme()}><BrowserRouter><App bookStore={bookStore}/></BrowserRouter></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
