 import React from 'react'
 import ReactDOM from 'react-dom'
 import { BrowserRouter as Router } from 'react-router-dom';
 
 import App from './App';
 import { ResultCotextProvider } from './contexts/ResultContextProvider';
 import "./global.css";

 ReactDOM.render(
     <ResultCotextProvider>
         <Router>
            <App />
        </Router>
     </ResultCotextProvider>, 
    document.getElementById("root")
);