import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'index.scss';


ReactDOM.render(
  //<React.StrictMode>
    <App/>,
 // </React.StrictMode>,  这个导致了NoteSection打印两次
  document.getElementById('root')
);


serviceWorker.unregister();
