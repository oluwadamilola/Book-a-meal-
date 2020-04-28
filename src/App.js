import React from 'react';
import Home from './components/Home.js';
import routes from './core/Routing';
import { Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Home/>
            {routes.map(({ path, component }, key) => {
        return <Route path={path} exact component={component} key={key} />;
      })}
        </>
    )
}

export default App;

