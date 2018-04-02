import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Footer from './Commons/Footer/Footer';
import Header from './Commons/Header/Header';
import About from './About/About';
import Calendar from './Calendar/Calendar';
import Contacts from './Contacts/Contacts';
import NotFound from './Commons/NotFound/NotFound'

import '../App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <Switch>

                    <Route
                        exact
                        path='/'
                        render={
                            () => (
                                <Redirect
                                    to='/about'
                                    component={About}
                                />
                            )
                        }
                    />
                    <Route
                        path='/tech-task'
                        component={About}
                    />
                    <Route
                        path='/about'
                        component={About}
                    />
                    <Route
                        path='/calendar'
                        component={Calendar}
                    />
                    <Route
                        path='/contacts'
                        component={Contacts}
                    />

                    <Route path = '*' component = {NotFound}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}

export default App;
