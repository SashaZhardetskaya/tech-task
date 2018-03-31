import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";


import logo from '../logo.svg';
// import './Try.scss';
import Footer from './Commons/Footer/Footer';
import Header from './Commons/Header/Header';
import About from './About/About';
import NotFound from './Commons/NotFound/NotFound'

import '../App.css';




class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <Switch>

                    <Route
                        exact
                        path="/"
                        render={
                            () => (
                                <Redirect
                                    to="/about"
                                    component={About}
                                />
                            )
                        }
                    />
                    <Route
                        path='/about'
                        component={About}
                    />
                    <Route
                        path='/dashboard-admin'
                        // component={DashboardAdminContainer}
                    />
                    <Route
                        path='/question'
                        // component={Question}
                    />

                    <Route path = "*" component = {NotFound}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}

export default App;
