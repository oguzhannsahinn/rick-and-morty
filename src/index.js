import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import './style.css'

const store = configureStore();

ReactDOM.render(
  <div>
    <BrowserRouter> <Provider store={store}><App/></Provider> </BrowserRouter>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
