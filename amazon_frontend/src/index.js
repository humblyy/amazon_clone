import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './components/contextProvider/ContextProvider';
import {reducer,initialState} from "./Action/ReducerFunction"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider reducer={reducer} initialState={initialState} >
      
        <App />
    </ContextProvider>
    
  </React.StrictMode>
);

