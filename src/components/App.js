import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';
import test from './test';
import '../Navbar.css'

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div > 
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/texts" component={Texts} ></Route>
                        <Route exact path="/words" component={Words} ></Route>
                        <Route exact path="/test" component={test} ></Route>
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;

