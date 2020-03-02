import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import IssueList from './components/issueList/issueList' 
import Issue from './components/issue/issue'

function App() {

  const style_ul= {
  listStyleType: "none",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  backgroundColor: "#333",
  }

  const style_li={
    display: "block",
    float:"left",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
  }
  return (
    <div className="App">
       <Router>
    <div>
      <ul style={style_ul}>
        <li>
          <Link style={style_li} to="/">List</Link>
        </li>
        <li>
          <Link style={style_li} to="/create">Create Cat</Link>
        </li>
        <li >
          <Link  style={style_li} to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
      <Switch>
      <Route exact path="/" component={IssueList} />
      <Route exact path="/issue/:id" component={Issue} />
        {/* 
        <Route exact path="/cat/create" component={CreateCat} />
        <Route exact path="/cat/:id" component={Cat} /> */}
      </Switch>
    </div>
  </Router>
       
    </div>
  );
}

export default App;
