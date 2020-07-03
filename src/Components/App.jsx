import React from 'react';
import TopBar from './Organisms/TopBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "../styles/styles.scss"
import Public from './Pages/Public';
import Private from './Pages/Private';

function App() {

  
  return (
    <Router> 
    <TopBar />
    <Switch>
      <Route path="/" exact component={Public}/>
      <Route path="/private" component={Private}/>
      <Route component={()=>
      <div className="ed-grid">
        <h1>404 not found</h1>
      </div>}/>
    </Switch>
  </Router>
  )
}

export default App;
