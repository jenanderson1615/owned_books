import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme()}><BrowserRouter><App /></BrowserRouter></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
