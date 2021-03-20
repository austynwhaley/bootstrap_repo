import React, { Component } from 'react';


import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage/index'
import About from './pages/About/index'
import Contact from './pages/Contact'
import Pdf from './pages/Pdf'
import Portfolio from './pages/Portfolio/index.js'
import NotFound from './pages/404'

class App extends Component{

  render() {
    return (

      <Router>
        <Switch>
        <Route exact path='/bootstrap_repo' component={Homepage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/pdf' component={Pdf}/>
        <Route exact path="/404" component={NotFound}/>
        <Redirect to="/404"/>
        </Switch>
      </Router>

    ) 
  }  

    

}

export default App;