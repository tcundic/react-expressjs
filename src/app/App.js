import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Home from '../components/Home';

const App = () => {
    
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/contact" component={ContactUs} />
                <Route render={() => <Redirect to="/" />}/>
            </Switch>
        </div>
    );
};

export default App;
