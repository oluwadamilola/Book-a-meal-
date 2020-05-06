import React from 'react';
import Home from './Home.js';
import routes from '../core/Routing';
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./shared/Header";



const App = () => {
    return (
        <>
       
        <BrowserRouter>
            {routes.map(({ path, component }, key) => {
        return <Route path={path} exact component={component} key={key} />
      })}
      </BrowserRouter> 
       </>
    )
}

export default App;


