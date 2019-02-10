import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Routers = () => {
    return (
        <div>
        <Navbar />
        <BrowserRouter>
            <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          </Switch>
        </BrowserRouter>
        <Footer />
        </div>
    );
}

export default Routers;