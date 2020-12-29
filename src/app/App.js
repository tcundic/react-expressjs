import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';

const App = () => {
    
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route render={() => <Redirect to="/" />}/>
            </Switch>
        </div>
    );
};

export default App;
