import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Listitem1 from './listitem1';
import Listitem2 from './listitem2'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Listitem1/>
              <Listitem2/>
              <Switch>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
