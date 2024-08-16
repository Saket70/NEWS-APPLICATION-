import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
                                                
export default class App extends Component {
  pageSize = 5;
  coutry = "us"
  render() {
    return (
      <div>
        <Router>
          <Nav />
       
           <Routes>                                        
           <Route exact path = "/technology"  element={ <News key="technology" pageSize={this.pageSize} country={this.country} catagory="technology"/>}/>
           <Route exact path = "/science"   element={ <News  key="science"   pageSize={this.pageSize} country={this.country} catagory="science"/>}/>
           <Route exact path = "/general" element={ <News    key="general"  pageSize={this.pageSize} country={this.country} catagory="general"/>}/>
           <Route exact path = "/business"  element={ <News key="business" pageSize={this.pageSize} country={this.country} catagory="business"/>}/>
           <Route exact path = "/entertainment"  element={ <News key ={"entertainment"} pageSize={this.pageSize} country={this.country} catagory="entertainment"/>}/>
           <Route exact path = "/sports"  element={ <News  key="sports" pageSize={this.pageSize} country={this.country} catagory="sports"/>}/>
           <Route exact path = "/health"  element={ <News  key="health"  pageSize={this.pageSize} country={this.country} catagory="health"/>}/>
        </Routes>

        </Router>
      </div>
    )
  }
}
