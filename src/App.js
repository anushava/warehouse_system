import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListProductsComponent from './components/ListProductsComponent';
import ListInventoryComponent from './components/ListInventoryComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProductsComponent}></Route>
                          <Route path = "/products" component = {ListProductsComponent}></Route>
                          <Route path = "/inventory" component = {ListInventoryComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
